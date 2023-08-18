import {
  renderInitialHTML,
  renderGameHTML,
  renderCreationHTML,
  renderLeaderboardHTML,
  displayFinalScores,
  displayWinner
} from "./GameState.js";

renderInitialHTML();

document.addEventListener("SavePlayer", renderCreationHTML)
document.addEventListener("SaveTeam", renderCreationHTML)