import {
  transientGameState,
  resetTransientGameState,
  generateScoreCard,
  postTeamScoreCard,
} from "./currentGame.js";
import { playerInput } from "./Players.js";
import { createPlayer, createTeam, startGame, handleStartGame } from "./Buttons.js";
import { teamInput } from "./Teams.js";
import { leaderboardOutput } from "./Leaderboard.js";
import { teamSelect, initial, round1 } from "./Rounds.js";

const creationContainer = document.querySelector(".container__creation");
const gameContainer = document.querySelector(".container__game");
const leaderboardContainer = document.querySelector(".container__leaderboard");

export const renderCreationHTML = async () => {
  const playerSection = await playerInput();
  const playerButton = await createPlayer();
  const teamCreation = await teamInput();
  const teamButton = await createTeam();
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

export const renderGameHTML = async (round) => {
  const gameOutput = await round
  gameContainer.innerHTML = gameOutput;
};

export const renderRound1 = async (round1) => {
  const roundOutput = await round1
  gameContainer.innerHTML = roundOutput
}

export const renderLeaderboardHTML = async () => {
  const leaderboardHTML = await leaderboardOutput();
  const outputHTML = `
  ${leaderboardHTML}`;

  leaderboardContainer.innerHTML = outputHTML;
};

export const renderInitialHTML = async () => {
  const initialHTML = await initial()
  await renderCreationHTML();
  await renderGameHTML(initialHTML);
  await renderLeaderboardHTML();
};

const renderRound = async () => {
  const round1HTML = await round1()
  await renderRound(round1HTML)

}

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
  let count = 0
  let tiedString = ""
  for (const team of teams) {
    if (team.score > winnerScore) {
      winnerScore = team.score
      winner = team.name;
      count = 0
      tiedString = team.name
    } else if (team.score = winnerScore && team.score > 0){
      count++
      tiedString += ` and ${team.name}`
    }
  }
  let winnerHTML = "";
  if (winnerScore > 0 && count == 0) {
    winnerHTML = `Team ${winner} has won this time with ${winnerScore} points!`;
  } else if (winnerScore = 0) {
    winnerHTML = `There was no winner. You all tied for last with zero points :(`;
  } else if (count == 1){
    winnerHTML = `Tied between ${tied} with ${winnerScore} points!`
  } else if (count == 2){
    winnerHTML = `THREE WAY TIE! ${tiedString} all had ${winnerScore} points`
  }
  return winnerHTML;
};
