import {
  renderInitialHTML,
  renderGameHTML,
  renderCreationHTML,
  renderLeaderboardHTML
} from "./GameState.js";

renderInitialHTML();

renderGameHTML();

document.addEventListener("SavePlayer", renderCreationHTML)
document.addEventListener("SaveTeam", renderCreationHTML)