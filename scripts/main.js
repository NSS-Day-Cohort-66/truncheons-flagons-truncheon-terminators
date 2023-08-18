import {
  renderInitialHTML,
  renderGameHTML,
  renderCreationHTML,
  renderLeaderboardHTML,
  displayFinalScores,
  displayWinner,
} from "./GameState.js";

renderInitialHTML();

renderGameHTML();

document.addEventListener("SavePlayer", renderCreationHTML)
document.addEventListener("SaveTeam", renderCreationHTML)