import { playerInput } from "./Players.js";
import { createPlayer, createTeam } from "./Buttons.js";
import { teamInput } from "./Teams.js";
import { leaderboardOutput } from "./Leaderboard.js";


const mainContainer = document.querySelector(".container");

const leaderboardHTML = await leaderboardOutput();

const renderInitialHTML = async () => {
  const playerSection = await playerInput();
  const playerButton = await createPlayer();
  const teamCreation =  teamInput();
  const teamButton = createTeam()

  const outputHTML = `<h1>TEST YOUR CODE</h1>
  <div>
  ${playerSection}
  ${playerButton}
  </div>
  <div>
  ${teamCreation}
  ${teamButton}
  </div>
  ${leaderboardHTML}
    `;

  mainContainer.innerHTML = outputHTML;
};

renderInitialHTML();
