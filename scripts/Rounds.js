import { displayWinner, displayFinalScores } from "./GameState.js";
import {
  setTeamName,
  setTeamScore,
  transientGameState,
} from "./currentGame.js";
import {
  teamsDropdown,
  team1Dropdown,
  team2Dropdown,
  team3Dropdown,
} from "./Teams.js";
import { roundRender1, startGame } from "./Buttons.js";

export const initial = () => {
  const startGameButton = startGame();
  return `${startGameButton}`;
};

export const teamSelect = async () => {
  document.addEventListener("change", handleTeam1Selection);
  document.addEventListener("change", handleTeam2Selection);
  document.addEventListener("change", handleTeam3Selection);

  const team1DropDownHTML = await team1Dropdown();
  const team2DropDownHTML = await team2Dropdown();
  const team3DropDownHTML = await team3Dropdown();
  const handleRound1 = await roundRender1();
  return `<h2>Select Your Teams</h2>
    <div>Team 1${team1DropDownHTML}</div>
    <img src="../assets/vs.png" />
    <div>Team 2${team2DropDownHTML}</div>
    <img src="../assets/vs.png" />
    <div>Team 3${team3DropDownHTML}</div>
    ${handleRound1}
    `;
};

const handleTeam1Selection = (changeEvent) => {
  if (changeEvent.target.id === "team1_choice") {
    setTeamName(changeEvent.target.dataset.name, transientGameState.teams.team1);
    console.log(transientGameState)
  }
};
const handleTeam2Selection = (changeEvent) => {
  if (changeEvent.target.id === "team2_choice") {
    setTeamName(changeEvent.target.name, transientGameState.teams.team2);
    console.log(transientGameState)
  }
};
const handleTeam3Selection = (changeEvent) => {
  if (changeEvent.target.id === "team3_choice") {
    setTeamName(changeEvent.target.name, transientGameState.teams.team3);
    console.log(transientGameState)
  }
};

export const round1 = async () => {
  const games = await transientGameState;
  let round1 = `<section>
        <h2 id="${games.teams.team1.teamId}">${games.teams.team1.name}</h2>
        <h3>Current Score</h3><br>
        ${games.teams.team1.score}
        <h2 id="${games.teams.team2.teamId}">${games.teams.team2.name}</h2>
        <h3>Current Score</h3><br>
        ${games.teams.team2.score}
        <h2 id="${games.teams.team3.teamId}">${games.teams.team3.name}</h2>
        <h3>Current Score</h3><br>
        ${games.teams.team3.score}
        `;

  return round1;
};

const round2 = "";

const finalRound = "";

const winnerScreen = "";
