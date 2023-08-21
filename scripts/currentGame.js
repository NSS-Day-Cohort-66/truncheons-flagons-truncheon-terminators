import { fetchTeams } from "./Teams.js";

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


export const setTeam1Name = async (chosenTeam) => {
  const teams = await fetchTeams()
  const teamId = parseInt(chosenTeam.value)
  transientGameState.teams.team1.teamId = teamId;
  for (const team of teams){
    if (team.id === teamId){
      transientGameState.teams.team1.name = team.name
    }
  }
  console.log(transientGameState)
};
export const setTeam2Name = async (chosenTeam) => {
  const teams = await fetchTeams()
  const teamId = parseInt(chosenTeam.value)
  transientGameState.teams.team2.teamId = teamId;
  for (const team of teams){
    if (team.id === teamId){
      transientGameState.teams.team2.name = team.name
    }
  }
  console.log(transientGameState)
};
export const setTeam3Name = async (chosenTeam) => {
  const teams = await fetchTeams()
  const teamId = parseInt(chosenTeam.value)
  transientGameState.teams.team3.teamId = teamId;
  for (const team of teams){
    if (team.id === teamId){
      transientGameState.teams.team3.name = team.name
    }
  }
  console.log(transientGameState)
};


export const handleTeam1Selection = (changeEvent) => {
  if (changeEvent.target.id === "team1_choice") {
   setTeam1Name(changeEvent.target, transientGameState.teams.team1);
 }
};

export const handleTeam2Selection = (changeEvent) => {
 if (changeEvent.target.id === "team2_choice") {
   setTeam2Name(changeEvent.target, transientGameState.teams.team2);
 }
};

export const handleTeam3Selection = (changeEvent) => {
 if (changeEvent.target.id === "team3_choice") {
   setTeam3Name(changeEvent.target, transientGameState.teams.team3);
 }
};

export const setTeam1Score = (scoreThisRound, team) => {
  transientGameState.teams.team1.score += parseInt(scoreThisRound);
};
export const setTeam2Score = (scoreThisRound, team) => {
  transientGameState.teams.team2.score += parseInt(scoreThisRound);
};
export const setTeam3Score = (scoreThisRound, team) => {
  transientGameState.teams.team3.score += parseInt(scoreThisRound);
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
