import { displayWinner, displayFinalScores } from "./GameState.js";
import {
  setTeam1Name,
  setTeam2Name,
  setTeam3Name,
  setTeamScore,
  transientGameState,
} from "./currentGame.js";
import {
  teamsDropdown,
  team1Dropdown,
  team2Dropdown,
  team3Dropdown,
} from "./Teams.js";
import { roundRender1, roundScore, startGame } from "./Buttons.js";

export const initial = () => {
  const startGameButton = startGame();
  return `${startGameButton}`;
};

export const teamSelect = async () => {
  const team1DropDownHTML = await team1Dropdown();
  const team2DropDownHTML = await team2Dropdown();
  const team3DropDownHTML = await team3Dropdown();
  const handleRound1 = await roundRender1();
  document.addEventListener("change", handleTeam1Selection);
  document.addEventListener("change", handleTeam2Selection);
  document.addEventListener("change", handleTeam3Selection);
  return `<h2>Select Your Teams</h2>
    <div class="round1__state">
      <h2>Team 1${team1DropDownHTML}</h2>
        <img class="vsImage" src="../assets/vs.png" />
      <h2>Team 2${team2DropDownHTML}</h2>
        <img class="vsImage" src="../assets/vs.png" />
      <h2>Team 3${team3DropDownHTML}</h2>
    </div>
    ${handleRound1}
    `;
};

export const round1 = async () => {
  const games = await transientGameState;
  const round1Button = roundScore()
  let round1 = `<section>
        <h2 id="${games.teams.team1.teamId}">${games.teams.team1.name}</h2>
        <input type="text" placeholder="R1 Score" name="score1">
        <h2 id="${games.teams.team2.teamId}">${games.teams.team2.name}</h2>
        <input type="text" placeholder="R2 Score" name="score2">
        <h2 id="${games.teams.team3.teamId}">${games.teams.team3.name}</h2>
        <input type="text" placeholder="R3 Score" name="score3"><br>
        ${round1Button}
        `;

  return round1;
};

const round2 = "";

const finalRound = "";

const winnerScreen = "";
