import {
  setTeamName,
  setTeamScore,
  transientGameState,
  resetTransientGameState,
  generateScoreCard,
  postTeamScoreCard,
} from "./currentGame.js";
import { playerInput } from "./Players.js";
import { createPlayer, createTeam } from "./Buttons.js";
import { teamInput, teamsDropdown } from "./Teams.js";
import { leaderboardOutput } from "./Leaderboard.js";

const leaderboardHTML = await leaderboardOutput();
const playerSection = await playerInput();
const playerButton = await createPlayer();
const teamCreation = teamInput();
const teamButton = createTeam();

const creationContainer = document.querySelector(".container__creation");
const gameContainer = document.querySelector(".container__game");
const leaderboardContainer = document.querySelector(".container__leaderboard");

export const renderCreationHTML = async () => {
  const outputHTML = `
  <div class="createPlayerForm">
    ${playerSection}
    ${playerButton}
  </div>
  <div class="createTeamForm">
    ${teamCreation}
    ${teamButton}
  </div>`;
  creationContainer.innerHTML = outputHTML;
};

export const renderGameHTML = async () => {
  const gameOutput = "${round}";
  gameContainer.innerHTML = gameOutput;
};

export const renderLeaderboardHTML = async () => {
  const outputHTML = `
  ${leaderboardHTML}`;

  leaderboardContainer.innerHTML = outputHTML;
};

export const renderInitialHTML = async () => {
  await renderCreationHTML();
  await renderGameHTML();
  await renderLeaderboardHTML();
};

export const displayFinalScores = () => {
  const teams = transientGameState.teams;
  finalScoreArray = teams.map((team) => {
    return `<div>
            ${team.name} scored ${team.score} points
        </div>
        `;
  });
  finalScoresHTML = `<section class='finalScore'>${finalScoreArray.join(
    ""
  )}</section>`;
  return finalScoresHTML;
};

export const displayWinner = () => {
  const teams = transientGameState.teams;
  let winner = "";
  let winnerScore = 0;
  for (const team of teams) {
    if (team.score > winnerScore) {
      winner = team.name;
    }
  }
  let winnerHTML = "";
  if (winner > 0) {
    winnerHTML = `Team ${winner} has won this time!`;
  } else {
    winnerHTML = `There was no winner`;
  }
  return winnerHTML;
};
