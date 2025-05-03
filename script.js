const container = document.querySelector(".container");
const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");
const fileInput = promptForm.querySelector("#file-input");
const fileUploadWrapper = promptForm.querySelector(".file-upload-wrapper ");
const themeToggle = document.querySelector("#theme-toggle-btn");

//API setup
const API_KEY = "AIzaSyC0EVsAN0R_WTSv3vnLRoC7MMXU5iUjIII";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
const SEARCH_API_URL = "https://en.wikipedia.org/w/api.php";

let typingInterval, controller;
const chatHistory = [];
const userData = { message: "", file: {} };

// Function to check if query can be answered directly from FURIA_DATA
const checkFuriaData = (query) => {
    query = query.toLowerCase();

    // Check if query is directly in commonQuestions
    for (const [question, answer] of Object.entries(FURIA_DATA.commonQuestions)) {
        if (query.includes(question.toLowerCase())) {
            return { directAnswer: true, data: answer };
        }
    }

    // Check for team-specific questions
    for (const [teamName, teamData] of Object.entries(FURIA_DATA.teams)) {
        if (query.includes(teamName.toLowerCase())) {
            // Portuguese keywords for roster/players
            if (query.includes("roster") || query.includes("players") || query.includes("team") ||
                query.includes("jogadores") || query.includes("elenco") || query.includes("time") ||
                query.includes("equipe") || query.includes("lineup")) {
                return {
                    directAnswer: false,
                    data: `FURIA ${teamName} Team Information:\n${JSON.stringify(teamData, null, 2)}`
                };
            // Portuguese keywords for achievements/tournaments
            } else if (query.includes("achievement") || query.includes("tournament") || query.includes("win") ||
                       query.includes("conquista") || query.includes("torneio") || query.includes("campeonato") ||
                       query.includes("vitória") || query.includes("título") || query.includes("venceu") ||
                       query.includes("ganhou")) {
                return {
                    directAnswer: false,
                    data: `FURIA ${teamName} Achievements:\n${JSON.stringify(teamData.majorAchievements, null, 2)}`
                };
            // Portuguese keywords for history
            } else if (query.includes("history") || query.includes("história") || query.includes("historico") ||
                       query.includes("trajetória") || query.includes("percurso")) {
                return {
                    directAnswer: false,
                    data: `FURIA ${teamName} History:\n${teamData.history}`
                };
            }
        }
    }

    // Check for upcoming matches - Portuguese keywords
    if (query.includes("match") || query.includes("schedule") || query.includes("upcoming") || query.includes("next game") ||
        query.includes("partida") || query.includes("jogo") || query.includes("agenda") || query.includes("calendário") ||
        query.includes("próximo") || query.includes("quando") || query.includes("horário") || query.includes("data")) {
        return {
            directAnswer: false,
            data: `FURIA Upcoming Matches:\n${JSON.stringify(FURIA_DATA.upcomingMatches, null, 2)}`
        };
    }

    // Check for award information - Portuguese keywords
    if (query.includes("award") || query.includes("trophy") || query.includes("recognition") ||
        query.includes("prêmio") || query.includes("premiação") || query.includes("troféu") ||
        query.includes("reconhecimento") || query.includes("medalha")) {
        return {
            directAnswer: false,
            data: `FURIA Awards:\n${JSON.stringify(FURIA_DATA.awards, null, 2)}`
        };
    }

    // Check for organization information - Portuguese keywords
    if (query.includes("organization") || query.includes("founder") || query.includes("company") ||
        query.includes("organização") || query.includes("fundador") || query.includes("empresa") ||
        query.includes("criador") || query.includes("dono") || query.includes("proprietário")) {
        return {
            directAnswer: false,
            data: `FURIA Organization Information:\n${JSON.stringify(FURIA_DATA.organization, null, 2)}`
        };
    }

    // If no direct match, return the full data to help with context
    return {
        directAnswer: false,
        data: `FURIA Full Data Context:\n${JSON.stringify({
            organization: FURIA_DATA.organization,
            teams: Object.keys(FURIA_DATA.teams).map(team => ({
                name: team,
                roster: FURIA_DATA.teams[team].currentRoster || FURIA_DATA.teams[team].formerRoster,
                achievements: FURIA_DATA.teams[team].majorAchievements?.slice(0, 3) || []
            }))
        }, null, 2)}`
    };
};

// Function to search for context on the web
const searchForContext = async (query) => {
    try {
        const params = new URLSearchParams({
            action: "query",
            list: "search",
            srsearch: query,
            format: "json",
            origin: "*",
            prop: "extracts",
            exintro: true,
            explaintext: true,
            srlimit: 3
        });

        const response = await fetch(`${SEARCH_API_URL}?${params}`);
        const data = await response.json();

        if (data.query && data.query.search && data.query.search.length > 0) {
            const pageIds = data.query.search.map(result => result.pageid);
            const contextResults = [];

            for (const pageId of pageIds) {
                const contentParams = new URLSearchParams({
                    action: "query",
                    pageids: pageId,
                    prop: "extracts",
                    exintro: true,
                    explaintext: true,
                    format: "json",
                    origin: "*"
                });

                const contentResponse = await fetch(`${SEARCH_API_URL}?${contentParams}`);
                const contentData = await contentResponse.json();

                if (contentData.query && contentData.query.pages) {
                    const page = contentData.query.pages[pageId];
                    if (page && page.extract) {
                        contextResults.push({
                            title: page.title,
                            extract: page.extract
                        });
                    }
                }
            }

            return contextResults;
        }

        return [];
    } catch (error) {
        console.error("Error searching for context:", error);
        return [];
    }
};

//function to create message elements
const createMsgElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

//scroll to the bottom of the container
const scrollToBottom = () => container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

// Format the response text to preserve paragraphs
const formatResponseText = (text) => {
    // Replace markdown formatting with HTML
    const formattedText = text
        // Headers
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        // Bold and italic
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        // Unordered lists
        .replace(/^\s*[\-\*]\s+(.*)/gm, '<li>$1</li>')
        // Ordered lists
        .replace(/^\s*(\d+)\.\s+(.*)/gm, '<li>$2</li>')
        // Code blocks
        .replace(/```([^`]*)```/g, '<pre><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Paragraphs and line breaks
        .replace(/\n\n/g, "</p><p>")
        .replace(/\n/g, "<br>");

    // Wrap lists in appropriate containers
    let wrappedText = formattedText
        .replace(/<li>.*?<\/li>/g, match => {
            if (!match.startsWith('<ul>') && !match.startsWith('<ol>')) {
                return `<ul>${match}</ul>`;
            }
            return match;
        });

    // Clean up potentially redundant nested list tags
    wrappedText = wrappedText
        .replace(/<\/ul><ul>/g, '')
        .replace(/<\/ol><ol>/g, '');

    return `<p>${wrappedText}</p>`;
};

// Simulate typing effect for bot response
const typingEffect = (text, textElement, botMsgDiv) => {
    // Format the text to preserve paragraphs
    const formattedText = formatResponseText(text);
    textElement.innerHTML = "";

    // Set the innerHTML directly for formatted text with paragraphs
    textElement.innerHTML = formattedText;
    scrollToBottom();

    botMsgDiv.classList.remove("loading");
    document.body.classList.remove("bot-responding");
}

// Make de API call and generate the bot's response
const generateResponse = async (botMsgDiv) => {
    const textElement = botMsgDiv.querySelector(".message-text");
    controller = new AbortController();

    try {
        // First check if we can answer directly from FURIA_DATA
        const furiaDataResult = checkFuriaData(userData.message);

        // If we have a direct answer, use it immediately
        if (furiaDataResult.directAnswer) {
            chatHistory.push({
                role: "user",
                parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: (({ fileName, isImage, ...rest }) => rest)(userData.file) }] : [])]
            });

            const response = furiaDataResult.data;
            typingEffect(response, textElement, botMsgDiv);

            chatHistory.push({ role: "model", parts: [{ text: response }] });
            userData.file = {};
            return;
        }

        // If not a direct answer, search for context on the web
        const contextResults = await searchForContext(userData.message);

        // Combine web search results with FURIA_DATA context
        const webContextText = contextResults.length > 0
            ? `Here's some relevant information from the web that might help answer the query:\n\n${contextResults.map(result =>
                `WEB TITLE: ${result.title}\nWEB INFORMATION: ${result.extract}`).join('\n\n')}`
            : "";

        const furiaContextText = `Here's specific information from FURIA Esports:\n\n${furiaDataResult.data}`;

        const combinedContext = `${webContextText}\n\n${furiaContextText}`;

        // Add user message and file data to the chat history
        chatHistory.push({
            role: "user",
            parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: (({ fileName, isImage, ...rest }) => rest)(userData.file) }] : [])]
        });

        // Add context information
        chatHistory.push({
            role: "model",
            parts: [{ text: "I'll help with that. Let me check some information first." }]
        });

        chatHistory.push({
            role: "user",
            parts: [{ text: `CONTEXT INFORMATION: ${combinedContext}\n\nPlease use this context to help answer my previous question: ${userData.message}` }]
        });

        // Current date information to provide to the model
        const currentDate = new Date();
        const dateInfo = `Current date: ${currentDate.toLocaleDateString()}`;

        // Send the chat history to the API to get a response
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: chatHistory,
                systemInstruction: {
                    parts: [
                        { text: `Você é o FURIA Chatbot, um assistente útil para fãs do time FURIA Esports. Seja conversacional e envolvente, formatando suas respostas com parágrafos quando apropriado. Priorize informações do banco de dados da FURIA para perguntas específicas sobre a FURIA, mas use seu conhecimento mais amplo para fornecer respostas informativas quando apropriado. ${dateInfo}

IMPORTANTE: ${FURIA_DATA.uncertaintyInstructions.general}

Você é um assistente de IA com conhecimento sobre esports e jogos em geral. Embora seu foco principal seja a FURIA Esports, você também pode fornecer informações sobre outras equipes, jogos, torneios e o ecossistema mais amplo de esports.

REGRAS IMPORTANTES:
1. SEMPRE responda EXCLUSIVAMENTE em português brasileiro, independentemente do idioma da pergunta.
2. Se o tópico da conversa não estiver relacionado a esports, jogos ou temas próximos, recuse-se educadamente a responder, explicando que seu propósito é fornecer informações sobre FURIA Esports e o cenário de esports em geral.
3. Se a conversa se tornar acalorada, controversa ou inapropriada, recuse-se educadamente a continuar e redirecione para tópicos relacionados a esports.

Para respostas incertas sobre tópicos específicos da FURIA, você pode consultar estas fontes recomendadas:
${FURIA_DATA.uncertaintyInstructions.recommendedSources.map(source => {
    if (source.urls) {
        return `- ${source.name}: Várias páginas específicas de jogos`;
    } else {
        return `- ${source.name}: ${source.url}`;
    }
}).join('\n')}

Se você precisar fornecer uma fonte específica de um jogo, use o link apropriado do Liquipedia com base no jogo (CS2, Valorant, Rainbow Six, etc.).` }
                    ]
                }
            }),
            signal: controller.signal
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);

        // Process the response text and display with typing effect
        const responseText = data.candidates[0].content.parts[0].text.trim();
        typingEffect(responseText, textElement, botMsgDiv);

        chatHistory.push({ role: "model", parts: [{ text: responseText }] });
    } catch (error) {
        textElement.style.color = "#d62939";
        textElement.textContent = error.name === "AbortError" ? "Response generation stopped." : error.message;
        botMsgDiv.classList.remove("loading");
        document.body.classList.remove("bot-responding");
    } finally {
        userData.file = {};
    }
}

//Handle the form submission
const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = promptInput.value.trim();
    if (!userMessage || document.body.classList.contains("bot-responding")) return;

    promptInput.value = "";
    userData.message = userMessage;
    document.body.classList.add("bot-responding", "chats-active");
    fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");

    // Generate user message HTML with optional file attachment
    const userMsgHTML = `<p class="message-text"></p>${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="img-attachment" />` : `<p class="file-attachment"><span class="material-symbols-rounded">description</span>${userData.file.fileName}</p>`) : ""}`;

    const userMsgDiv = createMsgElement(userMsgHTML, "user-message");
    userMsgDiv.querySelector(".message-text").textContent = userMessage;
    chatsContainer.appendChild(userMsgDiv);
    scrollToBottom();

    setTimeout(() => {
        // Generate bot message HTML and add in the chats container after 600ms
        const botMsgHTML = `<img src="images/LogoDourada.jpeg" class="avatar"><div class="message-text">Just a sec..</div>`;
        const botMsgDiv = createMsgElement(botMsgHTML, "bot-message", "loading");
        chatsContainer.appendChild(botMsgDiv);
        scrollToBottom();
        generateResponse(botMsgDiv);
    }, 600);
}

//Handle the file input change (file upload)
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
        fileInput.value = "";
        const base64String = e.target.result.split(",")[1];
        fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
        fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached");

        // Store file data in userData obj
        userData.file = { fileName: file.name, data: base64String, mime_type: file.type, isImage };
    }
});

//cancel file upload
document.querySelector("#cancel-file-btn").addEventListener("click", () => {
    userData.file = {};
    fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");
});

//stop pngoing bot response
document.querySelector("#stop-response-btn").addEventListener("click", () => {
    userData.file = {};
    controller?.abort();
    clearInterval(typingInterval);
    chatsContainer.querySelector(".bot-message.loading").classList.remove("loading");
    document.body.classList.remove("bot-responding");
});

//Delete all chats
document.querySelector("#delete-chats-btn").addEventListener("click", () => {
    chatHistory.length = 0;
    chatsContainer.innerHTML = "";
    document.body.classList.remove("bot-responding", "chats-active");
});

//Handle suggestions click
document.querySelectorAll(".suggestions-item").forEach(item => {
    item.addEventListener("click", () => {
        promptInput.value = item.querySelector(".text").textContent;
        promptForm.dispatchEvent(new Event("submit"));
    });
});

// Show/hide controls for mobile on prompt input focus
document.addEventListener("click", ({ target }) => {
    const wrapper = document.querySelector(".prompt-wrapper");
    const shouldHide = target.classList.contains("prompt-input") || (wrapper.classList.contains ("hide-controls") && (target.id === "add-file-btn" || target.id === "stop-response-btn"));
    wrapper.classList.toggle("hide-controls", shouldHide);
});

// Toggle dark/light theme
themeToggle.addEventListener("click", ()  => {
    const isLightTheme = document.body.classList.toggle("light-theme");
    localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");
    themeToggle.textContent = isLightTheme ? "dark_mode" : "light_mode";
})

//Set initial theme from local storage
const isLightTheme = localStorage.getItem("themeColor") === "light_mode";
document.body.classList.toggle("light-theme", isLightTheme);
themeToggle.textContent = isLightTheme ? "dark_mode" : "light_mode";

promptForm.addEventListener("submit", handleFormSubmit);
promptForm.querySelector("#add-file-btn").addEventListener("click", () => fileInput.click());
