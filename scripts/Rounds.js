import { displayWinner, displayFinalScores } from "./GameState.js"
import { transientGameState } from "./currentGame.js"
import { teamsDropdown } from "./Teams.js"

export const initial = () => {
    return "Welcome to the game"
}

export const teamSelect = async() => {
    const teamsDropDownHTML = await teamsDropdown();
    return  `<h2>Select Your Teams</h2>
    <div>Team 1${teamsDropDownHTML}</div>
    <img src="../assets/vs.png" />
    <div>Team 2${teamsDropDownHTML}</div>
    <img src="../assets/vs.png" />
    <div>Team 3${teamsDropDownHTML}</div>
    `
}

const round1 = ""

const round2 = ""

const finalRound = ""

const winnerScreen = ""