// Buttons for Dom
import {
  transientGameState,
  setTeam1Score,
  setTeam2Score,
  setTeam3Score,
} from "./currentGame.js";
import { renderGameHTML, renderRound1 } from "./GameState.js";
import { addPlayer } from "./Players.js";
import { round1, teamSelect, round2 } from "./Rounds.js";
import { addTeam } from "./Teams.js";

const handleCreateTeam = (clickEvent) => {
  if (clickEvent.target.id === "create_team") {
    addTeam();
  }
};
export const createTeam = () => {
  document.addEventListener("click", handleCreateTeam);
  return `<button class="team_button" id="create_team">CREATE TEAM</button>`;
};

export const handleCreatePlayer = (clickEvent) => {
  if (clickEvent.target.id === "create_player") {
    addPlayer();
  }
};
export const createPlayer = () => {
  document.addEventListener("click", handleCreatePlayer);
  return `<button class="player_button" id="create_player">CREATE PLAYER</button>`;
};

export const handleStartGame = (clickEvent) => {
  if (clickEvent.target.id === "start_game") {
    const teamSelectHTML = teamSelect();
    renderGameHTML(teamSelectHTML);
  }
};
export const startGame = () => {
  document.addEventListener("click", handleStartGame);
  return `<button class="start_button" id="start_game">START GAME</button>`;
};

const handleSubmitScore = (clickEvent) => {
  if (clickEvent.target.id === "save_score") {
    // button event for function
  }
};
export const submitScore = () => {
  document.addEventListener("click", handleSubmitScore);
  return `<button class="submit_button" id="save_score">SUBMIT SCORE!</button>`;
};

const handlePlayAgain = (clickEvent) => {
  if (clickEvent.target.id === "play_again") {
    //button event for function
  }
};
export const playAgain = () => {
  document.addEventListener("click", handlePlayAgain);
  return `<button class="play_button" id="play_again">PLAY AGAIN?</button>`;
};

const handleRound1 = (clickEvent) => {
  const tGS = transientGameState.teams;
  if (clickEvent.target.id === "round1") {
    if (tGS.team1 && tGS.team2 && tGS.team3) {
      if (
        tGS.team1.teamId !== tGS.team2.teamId &&
        tGS.team1.teamId !== tGS.team3.teamId &&
        tGS.team2.teamId !== tGS.team3.teamId
      ) {
        const round1HTML = round1();
        renderGameHTML(round1HTML);
      } else {
        window.alert(`Must chose three teams, and all must be different`);
      }
    }
  }
};

export const roundRender1 = () => {
  document.addEventListener("click", handleRound1);
  return `<button class="round1" id="round1">Round 1!</button>`;
};

export const round1ScoreButton = () => {
  document.addEventListener("click", handleRound1Score);
  return `<button class="round1Score" id="round1Score">Round 2</button>`;
};

const handleRound1Score = (clickEvent) => {
  const round2HTML = round2();
  if (clickEvent.target.id === "round1Score") {
    const inputElement1 = document.querySelector('input[name="score1"]');
    const userInput1 = inputElement1.value;
    const inputElement2 = document.querySelector('input[name="score2"]');
    const userInput2 = inputElement2.value;
    const inputElement3 = document.querySelector('input[name="score3"]');
    const userInput3 = inputElement3.value;
    if (userInput1 && userInput2 && userInput3) {
      transientGameState.teams.team1.score += parseInt(userInput1);
      transientGameState.teams.team2.score += parseInt(userInput2);
      transientGameState.teams.team3.score += parseInt(userInput3);
      renderGameHTML(round2HTML);
    } else {
      window.alert("Add scores to each team even if zero points");
    }
    console.log(transientGameState);
  }
};
