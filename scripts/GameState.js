const gameTS = {
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
  gameTS.team1.name = chosenTeam;
};
const setTeam2Name = (chosenTeam) => {
  gameTS.team2.name = chosenTeam;
};
const setTeam3Name = (chosenTeam) => {
  gameTS.team2.name = chosenTeam;
};

const setTeam1Score = (scoreThisRound) => {
  gameTS.team1.score += scoreThisRound;
};
const setTeam2Score = (scoreThisRound) => {
  gameTS.team2.score += scoreThisRound;
};
const setTeam3Score = (scoreThisRound) => {
  gameTS.team3.score += scoreThisRound;
};

const resetGameTS = () => {
  gameTS = {
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
