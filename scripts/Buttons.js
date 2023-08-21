// Buttons for Dom

import { renderGameHTML, renderRound1 } from "./GameState.js";
import { addPlayer } from "./Players.js";
import { round1, teamSelect } from "./Rounds.js";
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
  if (clickEvent.target.id === "round1") {
    const roundOne = round1();
    renderRound1(roundOne);
  }
};
export const roundRender1 = () => {
  document.addEventListener("click", handleRound1);
  return `<button class="round1" id="round1">Round 1!</button>`;
};

const handleRound1Score = (clickEvent) => {
  if (clickEvent.target.id === "round1Score") {
    //const round1Score = round2()
  }
};
export const roundScore = () => {
  document.addEventListener("click", handleRound1Score);
  return `<button class="round1Score" id="round1Score">Submit Scores</button>`;
};
