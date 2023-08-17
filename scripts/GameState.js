const transientGameState = {
  team1: {
    name: "",
    score: 0,
  },
  team2: {
    name: "",
    score: 0,
  },
  team3: {
    name: "",
    score: 0,
  },
};

const setTeam1Name = (chosenTeam) => {
  transientGameState.team1.name = chosenTeam;
};
const setTeam2Name = (chosenTeam) => {
  transientGameState.team2.name = chosenTeam;
};
const setTeam3Name = (chosenTeam) => {
  transientGameState.team2.name = chosenTeam;
};

const setTeam1Score = (scoreThisRound) => {
  transientGameState.team1.score += scoreThisRound;
};
const setTeam2Score = (scoreThisRound) => {
  transientGameState.team2.score += scoreThisRound;
};
const setTeam3Score = (scoreThisRound) => {
  transientGameState.team3.score += scoreThisRound;
};

const resetTransientGameState = () => {
  transientGameState = {
    team1: {
      name: "",
      score: 0,
    },
    team2: {
      name: "",
      score: 0,
    },
    team3: {
      name: "",
      score: 0,
    },
  };
};
