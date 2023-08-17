import { leaderboardOutput } from "./Leaderboard.js";

const mainContainer = document.querySelector(".container");

const leaderboardHTML = leaderboardOutput();

const renderInitialHTML = async () => {
  const outputHTML = `<h1>TEST YOUR CODE</h1>
  ${leaderboardHTML}
    `;

  mainContainer.innerHTML = outputHTML;
};

renderInitialHTML();
