import { fetchTeams } from "./Teams.js";

export let transientGameState = {
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
    }
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

export const generateScoreCard1 = (team) => {
  const currentDate = new Date().toISOString().substring(0, 10);
  transientGameState.teams.team1.scoreCard.teamId = transientGameState.teams.team1.teamId;
  transientGameState.teams.team1.scoreCard.teamScore = transientGameState.teams.team1.score;
  transientGameState.teams.team1.scoreCard.gameDate = currentDate;
};
export const generateScoreCard2 = (team) => {
  const currentDate = new Date().toISOString().substring(0, 10);
  transientGameState.teams.team2.scoreCard.teamId = transientGameState.teams.team2.teamId;
  transientGameState.teams.team2.scoreCard.teamScore = transientGameState.teams.team2.score;
  transientGameState.teams.team2.scoreCard.gameDate = currentDate;
};
export const generateScoreCard3 = (team) => {
  const currentDate = new Date().toISOString().substring(0, 10);
  transientGameState.teams.team3.scoreCard.teamId = transientGameState.teams.team3.teamId;
  transientGameState.teams.team3.scoreCard.teamScore = transientGameState.teams.team3.score;
  transientGameState.teams.team3.scoreCard.gameDate = currentDate;
};


export const resetTransientGameState = () => {
  transientGameState = {
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
}

export const postTeamScoreCard1 = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.teams.team1.scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const postScoreCardEvent = new CustomEvent("scorePosted");
  document.dispatchEvent(postScoreCardEvent);
};

export const postTeamScoreCard2 = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.teams.team2.scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const postScoreCardEvent = new CustomEvent("scorePosted");
  document.dispatchEvent(postScoreCardEvent);
};

export const postTeamScoreCard3 = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientGameState.teams.team3.scoreCard),
  };
  const response = await fetch("http://localhost:8088/scores", postOptions);

  const postScoreCardEvent = new CustomEvent("scorePosted");
  document.dispatchEvent(postScoreCardEvent);
};
