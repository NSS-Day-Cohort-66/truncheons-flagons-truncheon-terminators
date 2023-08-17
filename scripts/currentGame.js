const transientGameState = {
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
};


const setTeam1Name = (chosenTeam) => {
  transientGameState.team1.name = chosenTeam.name;
  transientGameState.team1.teamId = chosenTeam.value;
};
const setTeam2Name = (chosenTeam) => {
  transientGameState.team2.name = chosenTeam.name;
  transientGameState.team2.teamId = chosenTeam.value;
};
const setTeam3Name = (chosenTeam) => {
  transientGameState.team3.name = chosenTeam.name;
  transientGameState.team3.teamId = chosenTeam.value;
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


const generateTeam1ScoreCard = () => {
  transientGameState.team1.scoreCard.teamId = transientGameState.team1.teamId;
  transientGameState.team1.scoreCard.teamScore = transientGameState.team1.score;
//   transientGameState.team1.scoreCard.gameDate = current - time;
};
const generateTeam2ScoreCard = () => {
  transientGameState.team1.scoreCard.teamId = transientGameState.team2.teamId;
  transientGameState.team1.scoreCard.teamScore = transientGameState.team2.score;
//   transientGameState.team1.scoreCard.gameDate = current - time;
};
const generateTeam3ScoreCard = () => {
  transientGameState.team1.scoreCard.teamId = transientGameState.team3.teamId;
  transientGameState.team1.scoreCard.teamScore = transientGameState.team3.score;
//   transientGameState.team1.scoreCard.gameDate = current - time;
};

const resetTransientGameState = () => {
  transientGameState = {
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
  };
};

const postTeam1ScoreCard = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.team1.scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const createPostTeam1Event = new CustomEvent("team1Posted");
  document.dispatchEvent(createPostTeam1Event);
};

const postTeam2ScoreCard = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.team2.scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const createPostTeam2Event = new CustomEvent("team1Posted");
  document.dispatchEvent(createPostTeam2Event);
};

const postTeam3ScoreCard = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.team3.scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const createPostTeam3Event = new CustomEvent("team1Posted");
  document.dispatchEvent(createPostTeam3Event);
};
