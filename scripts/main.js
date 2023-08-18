import { playerInput } from "./Players.js";
import { createPlayer, createTeam } from "./Buttons.js";
import { teamInput } from "./Teams.js";
import { leaderboardOutput } from "./Leaderboard.js";

const playerSection = await playerInput();
const playerButton = await createPlayer();
const leaderboardHTML = await leaderboardOutput();
const teamCreation = teamInput();
const teamButton = createTeam();

const creationContainer = document.querySelector(".container__creation");
const gameContainer = document.querySelector(".container__game");
const leaderboardContainer = document.querySelector(".container__leaderboard");

const renderCreationHTML = async () => {
  const outputHTML = `
  <div>
  ${playerSection}
  ${playerButton}
  </div>
  <div>
  ${teamCreation}
  ${teamButton}
  </div>
    `;

  creationContainer.innerHTML = outputHTML;
};

const renderGameHTML = async () => {
  return;
};

const renderLeaderboardHTML = async () => {
  const outputHTML = `
  ${leaderboardHTML}`;

  leaderboardContainer.innerHTML = outputHTML;
};

const renderInitialHTML = async () => {
  await renderCreationHTML();
  await renderGameHTML();
  await renderLeaderboardHTML();
};

renderInitialHTML();
