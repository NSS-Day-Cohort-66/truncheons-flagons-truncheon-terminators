import { playerInput } from "./Players.js";
import { createPlayer } from "./Buttons.js";
import { leaderboardOutput } from "./Leaderboard.js";

const mainContainer = document.querySelector(".container");

const leaderboardHTML = await leaderboardOutput();

const renderInitialHTML = async () => {
  const playerSection = await playerInput();
  const playerButton = await createPlayer();

  const outputHTML = `<h1>TEST YOUR CODE</h1>
  ${playerSection}
  ${playerButton}
  ${leaderboardHTML}
    `;

  mainContainer.innerHTML = outputHTML;
};

renderInitialHTML();
