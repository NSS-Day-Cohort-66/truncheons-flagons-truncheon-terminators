import { displayWinner, displayFinalScores } from "./GameState.js";
import {
  setTeam1Name,
  setTeam2Name,
  setTeam3Name,
  setTeam1Score,
  setTeam2Score,
  setTeam3Score,
  transientGameState,
} from "./currentGame.js";
import {
  teamsDropdown,
  team1Dropdown,
  team2Dropdown,
  team3Dropdown,
} from "./Teams.js";
import { roundRender1, round1ScoreButton, round2ScoreButton, startGame, submitScore } from "./Buttons.js";

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
    <div class="teamSelect__state">
      <h2>Team 1${team1DropDownHTML}</h2>
        <img class="vsImage" src="../assets/vs.png" />
      <h2>Team 2${team2DropDownHTML}</h2>
        <img class="vsImage" src="../assets/vs.png" />
      <h2>Team 3${team3DropDownHTML}</h2>
    </div>
    ${handleRound1}
    `;
};

const handleTeam1Selection = (changeEvent) => {
  if (changeEvent.target.id === "team1_choice") {
    setTeam1Name(changeEvent.target, transientGameState.teams.team1);
  }
};

const handleTeam2Selection = (changeEvent) => {
  if (changeEvent.target.id === "team2_choice") {
    setTeam2Name(changeEvent.target, transientGameState.teams.team2);
  }
};

const handleTeam3Selection = (changeEvent) => {
  if (changeEvent.target.id === "team3_choice") {
    setTeam3Name(changeEvent.target, transientGameState.teams.team3);
  }
};

export const round1 = async () => {
  const games = await transientGameState;
  const round1Button = round1ScoreButton();
  let round1 = `
      <img class="round__title" src="../assets/round1.png" />
        <section class="round1__state">
          <div class="team__rounds">
            <h2>${games.teams.team1.name}</h2>
            <input type="number" placeholder="Input Score..." name="score1_round1" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
          <img class="vsImage" src="../assets/vs.png" />
          <div class="team__rounds">
            <h2>${games.teams.team2.name}</h2>
            <input type="number" placeholder="Input Score..." name="score2_round1" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
          <img class="vsImage" src="../assets/vs.png" />
          <div class="team__rounds">
            <h2>${games.teams.team3.name}</h2>
            <input type="number" placeholder="Input Score..." name="score3_round1" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
        </section>
        ${round1Button}
        `;

  return round1;
};

export const round2 = async () => {
  const games = await transientGameState;
   const round2Button = round2ScoreButton(); 
  let round2 = `
      <img class="round__title" src="../assets/round2.png" />
        <section class="round1__state">
          <div class="team__rounds">
            <h2>${games.teams.team1.name}</h2>
            <h2>${games.teams.team1.score}</h2>
            <input type="number" placeholder="Input Score..." name="score1_round2" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
          <img class="vsImage" src="../assets/vs.png" />
          <div class="team__rounds">
            <h2>${games.teams.team2.name}</h2>
            <h2>${games.teams.team2.score}</h2>
            <input type="number" placeholder="Input Score..." name="score2_round2" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
          <img class="vsImage" src="../assets/vs.png" />
          <div class="team__rounds">
            <h2>${games.teams.team3.name}</h2>
            <h2>${games.teams.team3.score}</h2>
            <input type="number" placeholder="Input Score..." name="score3_round2" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
        </section>
        ${round2Button} 
        `;

  return round2;
};


export const round3 = async () => {
  const games = await transientGameState;
   const finalButton = submitScore(); 
  let round3 = `
      <img class="round__title" src="../assets/round3.png" />
        <section class="round1__state">
          <div class="team__rounds">
            <h2>${games.teams.team1.name}</h2>
            <h2>${games.teams.team1.score}</h2>
            <input type="number" placeholder="Input Score..." name="score1_round3" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
          <img class="vsImage" src="../assets/vs.png" />
          <div class="team__rounds">
            <h2>${games.teams.team2.name}</h2>
            <h2>${games.teams.team2.score}</h2>
            <input type="number" placeholder="Input Score..." name="score2_round3" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
          <img class="vsImage" src="../assets/vs.png" />
          <div class="team__rounds">
            <h2>${games.teams.team3.name}</h2>
            <h2>${games.teams.team3.score}</h2>
            <input type="number" placeholder="Input Score..." name="score3_round3" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
          </div>
        </section>
        ${finalButton} 
        `;

  return round3;
};

const winnerScreen = "";
