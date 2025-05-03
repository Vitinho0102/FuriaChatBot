const FURIA_DATA = {
  organization: {
    name: "FURIA Esports",
    foundedDate: "August 10, 2017",
    founders: [
      { name: "Jaime 'raizen' Pádua", role: "Co-Founder, Co-Owner, Co-CEO" },
      { name: "André Akkari", role: "Co-Founder, Co-Owner, Co-CEO" },
      { name: "Cristian Guedes", role: "Co-Founder, Co-Owner, Marketing & PR Manager" },
      { name: "Nicholas Nogueira", role: "Co-Founder, Co-Owner" }
    ],
    headquarters: "Brazil",
    website: "https://furia.gg/",
    socialMedia: {
      twitter: "https://twitter.com/FURIA",
      instagram: "https://www.instagram.com/furiagg/",
      facebook: "https://www.facebook.com/furiagg/",
      youtube: "https://www.youtube.com/c/furiagg"
    }
  },

  teams: {
    "Rainbow Six Siege": {
      currentRoster: [
        { id: "FelipoX", name: "Felipe De Lucia", role: "Captain", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "HerdsZ", name: "Gustavo Herdina", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "Jv92", name: "João Vitor", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "Kheyze", name: "Diego Zanello", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "nade", name: "Felipe Sá Ferreira", nationality: "Brazil", joinDate: "2024-03-11" }
      ],
      staff: [
        { id: "igoorctg", name: "Igor dos Santos", role: "Head Coach", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "Abreu", name: "Felipe da Silva", role: "Assistant Coach", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "Vittzzz", name: "Vitor Ruiz", role: "Analyst", nationality: "Brazil", joinDate: "2024-03-11" },
        { id: "Dann", name: "Daniel Mattos", role: "Team Coordinator", nationality: "Brazil", joinDate: "2024-03-11" }
      ],
      majorAchievements: [
        { tournament: "Six Invitational 2025", placement: "3rd", prize: "$240,000", date: "2025-02-15" },
        { tournament: "Esports World Cup 2024", placement: "3rd-4th", prize: "$160,000", date: "2024-08-03" },
        { tournament: "BR Premier Finals 2024", placement: "2nd", prize: "$14,060", date: "2024-12-01" },
        { tournament: "Super Copa do Brasil 2024", placement: "1st", prize: "$9,757", date: "2024-08-31" },
        { tournament: "BLAST R6 Major Manchester 2024", placement: "5th-8th", prize: "$30,000", date: "2024-05-24" },
        { tournament: "Brazil League 2024 - Stage 1", placement: "3rd", prize: "$23,444", date: "2024-04-14" }
      ],
      history: "FURIA entered Rainbow Six Siege in February 2020. The team has steadily improved over the years, with their breakthrough coming in 2024 when they acquired the former w7m esports roster. This move propelled them to international success, culminating in their impressive third-place finish at the Six Invitational 2025, the most prestigious tournament in Rainbow Six Siege."
    },

    "PUBG": {
      currentRoster: [
        { id: "guizeraa", name: "Guilherme Barbosa", nationality: "Brazil", joinDate: "2025-04-25" },
        { id: "Haven", name: "Erick Aguiar", nationality: "Brazil", joinDate: "2025-04-25" },
        { id: "possa", name: "Francisco Possamai dos Santos", nationality: "Brazil", joinDate: "2025-04-25" },
        { id: "zkrakeN", name: "Leandro Gomes", nationality: "Brazil", joinDate: "2025-04-25" }
      ],
      staff: [
        { id: "rds149", name: "Rafael Santos", role: "Coach", nationality: "Brazil", joinDate: "2025-04-25" }
      ],
      majorAchievements: [
        { tournament: "PUBG Global Invitational.S 2021", placement: "26th", prize: "$51,512", date: "2021-03-28" },
        { tournament: "GLL LATAM Masters - Phase 3", placement: "2nd", prize: "$11,000", date: "2019-10-20" },
        { tournament: "GLL LATAM Masters - Phase 2", placement: "3rd", prize: "$8,000", date: "2019-06-09" },
        { tournament: "ESL LA League: Season 2", placement: "2nd", prize: "$2,375", date: "2019-03-22" },
        { tournament: "Copa IGN Season 2", placement: "1st", prize: "$3,067", date: "2018-12-18" }
      ],
      history: "FURIA's PUBG division has had several roster iterations since its inception. The team initially had strong results in Latin American tournaments in 2018-2019. After a period of restructuring, they qualified for the PUBG Global Invitational.S 2021, one of the most prestigious PUBG tournaments. In February 2024, FURIA also created a PUBG Mobile team, which competed internationally before disbanding in December 2024. In April 2025, FURIA returned to the PUBG scene with a new roster."
    },

    "PUBG Mobile": {
      note: "Team disbanded on December 20, 2024",
      formerRoster: [
        { id: "Arturzin", name: "Artur da Silva Dornelas", nationality: "Brazil", joinDate: "2024-02-27", leaveDate: "2024-12-20" },
        { id: "Caiowski", name: "Caio Rodrigues Caldatto", nationality: "Brazil", joinDate: "2024-02-27", leaveDate: "2024-12-20" },
        { id: "Gustazyx", name: "Gustavo Mendes", nationality: "Brazil", joinDate: "2024-02-27", leaveDate: "2024-12-20" },
        { id: "AdriaN", name: "Adrian Bertoja", nationality: "Brazil", joinDate: "2024-02-27", leaveDate: "2024-12-20" },
        { id: "Silenceee", name: "Kauã Rodrigues Lopes", nationality: "Brazil", joinDate: "2024-09-05", leaveDate: "2024-12-18" },
        { id: "Becker", name: "Gabriel Engraf Becker", nationality: "Brazil", joinDate: "2024-02-27", leaveDate: "2024-07-21" }
      ],
      majorAchievements: [
        { tournament: "PUBG Mobile Global Championship 2024", placement: "44th-46th", prize: "$20,500", date: "2024-11-10" },
        { tournament: "PUBG Mobile Super League - Americas Fall 2024", placement: "7th", prize: "$10,500", date: "2024-10-13" },
        { tournament: "PUBG Mobile Super League - Americas Spring 2024", placement: "6th", prize: "$12,300", date: "2024-06-16" },
        { tournament: "PUBG Mobile Global Open 2024 - Prelims", placement: "9th", prize: "$5,000", date: "2024-04-03" }
      ],
      history: "FURIA entered PUBG Mobile in February 2024 with a Brazilian roster. The team competed in several regional and international tournaments throughout the year. Despite some promising results in regional events, they struggled to make a significant impact on the international stage. The team was disbanded in December 2024 after just under a year of competition."
    },

    "CS2": {
      currentRoster: [
        { id: "yuurih", name: "Yuri Santos", nationality: "Brazil", joinDate: "2018-04-19" },
        { id: "HEN1", name: "Henrique Teles", nationality: "Brazil", joinDate: "2023-10-19" },
        { id: "drop", name: "André Abreu", nationality: "Brazil", joinDate: "2023-06-14" },
        { id: "chelo", name: "Marcelo Cespedes", nationality: "Brazil", joinDate: "2023-06-14" },
        { id: "saffee", name: "Rafael Costa", nationality: "Brazil", joinDate: "2022-01-14" }
      ],
      staff: [
        { id: "guerri", name: "Nicholas Nogueira", role: "Coach", nationality: "Brazil", joinDate: "2018-05-01" }
      ],
      majorAchievements: [
        { tournament: "IEM Dallas 2022", placement: "1st", prize: "$100,000", date: "2022-06-05" },
        { tournament: "IEM Rio Major 2022", placement: "5th-8th", prize: "$45,000", date: "2022-11-12" },
        { tournament: "ESL Pro League Season 12", placement: "2nd", prize: "$60,000", date: "2020-10-04" },
        { tournament: "StarLadder Berlin Major 2019", placement: "3rd-4th", prize: "$70,000", date: "2019-09-08" },
        { tournament: "ECS Season 7 Finals", placement: "2nd", prize: "$80,000", date: "2019-06-09" }
      ],
      history: "FURIA's CS:GO team (now CS2) is one of the organization's most successful divisions and was one of their earliest teams, established in 2018. They quickly rose to prominence as one of Brazil's top CS:GO teams, competing at the highest international level. Their aggressive playstyle and innovative tactics have earned them recognition in the global scene. The team has represented Brazil at multiple Major tournaments and continues to be a perennial contender in international competitions."
    },

    "Valorant": {
      currentRoster: [
        { id: "Quick", name: "Alexandre dos Santos", nationality: "Brazil", joinDate: "2024-01-07" },
        { id: "Nozwerr", name: "Matheus Nunes", nationality: "Brazil", joinDate: "2023-11-26" },
        { id: "Khalil", name: "Khalil Schmidt", nationality: "Brazil", joinDate: "2023-11-26" },
        { id: "qck", name: "Caike Campos", nationality: "Brazil", joinDate: "2023-11-26" },
        { id: "dgzin", name: "Douglas Silva", nationality: "Brazil", joinDate: "2023-11-26" }
      ],
      staff: [
        { id: "bzkA", name: "Matheus Tarasconi", role: "Coach", nationality: "Brazil", joinDate: "2023-12-22" }
      ],
      majorAchievements: [
        { tournament: "Valorant Champions Tour 2024: Americas League", placement: "9th", prize: "$10,000", date: "2024-05-26" },
        { tournament: "VCT 2023: LOCK//IN São Paulo", placement: "13th-16th", prize: "$8,000", date: "2023-03-04" },
        { tournament: "VCT 2022: Brazil Stage 1 Challengers", placement: "4th", prize: "$10,000", date: "2022-04-10" }
      ],
      history: "FURIA entered Valorant in June 2020, shortly after the game's release. Like many organizations, they saw the potential in Riot Games' new FPS title. The team has gone through several roster iterations, competing primarily in the Brazilian and South American Valorant scenes. While they have had mixed results internationally, they remain one of Brazil's recognizable Valorant teams, qualifying for regional leagues and occasionally international events."
    },

    "League of Legends": {
      currentRoster: [
        { id: "fNb", name: "Felipe Bassi", nationality: "Brazil", joinDate: "2023-11-26" },
        { id: "Envy", name: "Edgar Pina", nationality: "Brazil", joinDate: "2023-11-26" },
        { id: "Goot", name: "Gabriel Pereira", nationality: "Brazil", joinDate: "2023-11-26" },
        { id: "Trigo", name: "Alexandre Gouveia", nationality: "Brazil", joinDate: "2024-04-15" },
        { id: "RedBert", name: "Roberto Saucedo", nationality: "Mexico", joinDate: "2023-11-26" }
      ],
      staff: [
        { id: "Von", name: "Thiago Von", role: "Coach", nationality: "Brazil", joinDate: "2023-11-26" }
      ],
      majorAchievements: [
        { tournament: "CBLOL 2024 Split 1", placement: "5th-6th", prize: "$15,000", date: "2024-04-06" },
        { tournament: "CBLOL 2023 Split 2", placement: "3rd", prize: "$20,000", date: "2023-09-09" }
      ],
      history: "FURIA joined the Brazilian League of Legends scene by acquiring a spot in the CBLOL (Campeonato Brasileiro de League of Legends) in late 2020. The team has since established itself as a competitive force in the Brazilian league, with their best result being a third-place finish in CBLOL 2023 Split 2. They continue to develop talent from the Brazilian and Latin American regions."
    },

    "Rocket League": {
      currentRoster: [
        { id: "yanxnz", name: "Yan Vieira", nationality: "Brazil", joinDate: "2021-02-10" },
        { id: "CaioTG1", name: "Caio Almeida", nationality: "Brazil", joinDate: "2022-08-15" },
        { id: "drufinho", name: "Gabriel Borges", nationality: "Brazil", joinDate: "2023-11-02" }
      ],
      staff: [
        { id: "Bah", name: "Bahiano", role: "Coach", nationality: "Brazil", joinDate: "2022-11-05" }
      ],
      majorAchievements: [
        { tournament: "RLCS 2023-24 - Spring Major", placement: "9th-12th", prize: "$8,000", date: "2024-06-01" },
        { tournament: "RLCS 2022-23 - World Championship", placement: "13th-16th", prize: "$25,000", date: "2023-08-13" },
        { tournament: "RLCS 2021-22 - Spring Split: South America Regional Event 1", placement: "1st", prize: "$15,000", date: "2022-05-01" }
      ],
      history: "FURIA entered Rocket League in February 2021, signing a Brazilian roster to compete in the South American region. They quickly established themselves as one of the top teams in South America, consistently qualifying for RLCS World Championships. Their success has helped put South American Rocket League on the international map, with their players becoming fan favorites for their flashy, mechanical playstyle."
    }
  },

  awards: [
    { recipient: "Kheyze", award: "SiegeGG's EVP", tournament: "Six Invitational 2025", date: "2025-02-16" },
    { recipient: "FelipoX", award: "SiegeGG's Day 3 MVP", tournament: "Six Invitational 2025", date: "2025-02-16" },
    { recipient: "FelipoX", award: "Male Player of 2024", tournament: "Prêmio eSports Brasil Awards", date: "2024-12-12" },
    { recipient: "Kheyze", award: "Super Copa do Brasil MVP 2024", tournament: "Brasil Awards", date: "2024-12-03" },
    { recipient: "FURIA R6 Team", award: "Team of 2024", tournament: "Brasil Awards", date: "2024-12-05" },
    { recipient: "yuurih", award: "Best CS:GO Player - Brazil", tournament: "Brasil Esports Awards", date: "2022-12-15" }
  ],

  upcomingMatches: [
    {
      team: "Rainbow Six Siege",
      opponent: "Elevate",
      tournament: "RE:L0:AD 2025",
      date: "2025-05-10T15:00:00-03:00",
      streamLink: "https://www.twitch.tv/rainbow6"
    },
    {
      team: "CS2",
      opponent: "Team Liquid",
      tournament: "ESL Pro League Season 21",
      date: "2025-05-12T14:30:00-03:00",
      streamLink: "https://www.twitch.tv/esl_csgo"
    },
    {
      team: "Valorant",
      opponent: "LOUD",
      tournament: "VCT Americas 2025",
      date: "2025-05-15T18:00:00-03:00",
      streamLink: "https://www.twitch.tv/valorant_br"
    }
  ],

  commonQuestions: {
    "Who is FURIA?": "FURIA Esports is a Brazilian esports organization founded in 2017. It competes in multiple games including CS2, Valorant, Rainbow Six Siege, PUBG, and Rocket League. The organization was founded by Jaime 'raizen' Pádua, André Akkari, Cristian Guedes, and Nicholas Nogueira.",
    "When was FURIA founded?": "FURIA Esports was founded on August 10, 2017.",
    "Who owns FURIA?": "FURIA Esports is co-owned by its founders: Jaime 'raizen' Pádua, André Akkari, Cristian Guedes, and Nicholas Nogueira.",
    "Quem é a FURIA?": "FURIA Esports é uma organização brasileira de esports fundada em 2017. Ela compete em vários jogos, incluindo CS2, Valorant, Rainbow Six Siege, PUBG e Rocket League. A organização foi fundada por Jaime 'raizen' Pádua, André Akkari, Cristian Guedes e Nicholas Nogueira.",
    "Quando a FURIA foi fundada?": "A FURIA Esports foi fundada em 10 de agosto de 2017.",
    "Quem são os donos da FURIA?": "A FURIA Esports é de propriedade compartilhada de seus fundadores: Jaime 'raizen' Pádua, André Akkari, Cristian Guedes e Nicholas Nogueira.",
    "Como comprar produtos da FURIA?": "Você pode comprar produtos oficiais da FURIA através da loja online oficial no site https://furiagg.com.br/collections/todos ou nas lojas físicas parceiras. A FURIA oferece uma variedade de produtos como camisetas, moletons, bonés e acessórios com a marca da equipe.",
    "Onde assistir jogos da FURIA?": "Os jogos da FURIA são transmitidos em plataformas como Twitch e YouTube, dependendo do jogo e torneio. Canais oficiais dos torneios como ESL, BLAST, e Riot Games transmitem partidas de CS2, Valorant e outros jogos. Você também pode seguir as redes sociais da FURIA para anúncios de transmissões."
  },

  // Instructions for when answers are uncertain
  uncertaintyInstructions: {
    general: "You can use your own knowledge to answer questions that go beyond the FURIA database. While the FURIA data is the primary source of truth for FURIA-specific information, feel free to use your broader knowledge to provide helpful, informative responses when appropriate. Only if you're truly uncertain, suggest reliable sources where the user can find up-to-date information.",
    recommendedSources: [
      {
        name: "FURIA Official Website",
        url: "https://furia.gg/"
      },
      {
        name: "FURIA Twitter/X",
        url: "https://twitter.com/FURIA"
      },
      {
        name: "HLTV (for CS2)",
        url: "https://www.hltv.org/team/8297/furia"
      },
      {
        name: "Liquipedia",
        urls: {
          cs2: "https://liquipedia.net/counterstrike/FURIA_Esports",
          valorant: "https://liquipedia.net/valorant/FURIA_Esports",
          rainbowsix: "https://liquipedia.net/rainbowsix/FURIA_Esports",
          rocketleague: "https://liquipedia.net/rocketleague/FURIA_Esports",
          pubg: "https://liquipedia.net/pubg/FURIA_Esports"
        }
      },
      {
        name: "VLR.gg (for Valorant)",
        url: "https://www.vlr.gg/team/2231/furia"
      }
    ],
    responseTemplate: "I don't have specific information about {topic} in my FURIA database, but I can provide a general answer based on my knowledge. If you'd like more official or up-to-date information, you can check these sources:\n\n- FURIA's official website: https://furia.gg/\n- FURIA's Twitter/X: https://twitter.com/FURIA\n- {specificSource}: {specificUrl}"
  }
};

// Export the data for use in other scripts
if (typeof module !== 'undefined') {
  module.exports = FURIA_DATA;
}