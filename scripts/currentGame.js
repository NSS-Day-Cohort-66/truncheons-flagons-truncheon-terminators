export const transientGameState = {
  teams: {
    team1: {
      name: "",
      teamId: 0,
      score: 0,
      scoreCard: {
        teamId: 0,
        teamScore: 0,
        gameDate: "",
      },
    },
    team2: {
      name: "",
      teamId: 0,
      score: 0,
      scoreCard: {
        teamId: 0,
        teamScore: 0,
        gameDate: "",
      },
    },
    team3: {
      name: "",
      teamId: 0,
      score: 0,
      scoreCard: {
        teamId: 0,
        teamScore: 0,
        gameDate: "",
      },
    },
  }
};



export const setTeamName = (chosenTeam, team) => {
  transientGameState.teams[team].name = chosenTeam.name;
  transientGameState.teams[team].teamId = chosenTeam.value;
};

export const setTeamScore = (scoreThisRound, team) => {
  transientGameState.teams[team].score += scoreThisRound;
};

export const generateScoreCard = (team) => {
  const currentDate = new Date().toISOString().substring(0, 10);
  transientGameState.teams[team].scoreCard.teamId = transientGameState.teams[team].teamId;
  transientGameState.teams[team].scoreCard.teamScore = transientGameState.teams[team].score;
  transientGameState.teams[team].scoreCard.gameDate = currentDate;
};


export const resetTransientGameState = () => {
  for (const team in transientGameState.teams) {
    transientGameState.teams[team].name = "";
    transientGameState.teams[team].teamId = 0;
    transientGameState.teams[team].score = 0;
    transientGameState.teams[team].scoreCard.teamId = 0;
    transientGameState.teams[team].scoreCard.teamScore = 0;
    transientGameState.teams[team].scoreCard.gameDate = "";
  }
};

export const postTeamScoreCard = async (team) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.teams[team].scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const postScoreCardEvent = new CustomEvent("scorePosted");
  document.dispatchEvent(postScoreCardEvent);
};
