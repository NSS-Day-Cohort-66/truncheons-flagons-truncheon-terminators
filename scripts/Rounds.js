import { displayWinner, displayFinalScores } from "./GameState.js"
import { transientGameState } from "./currentGame.js"
import { teamsDropdown } from "./Teams.js"
import { startGame } from "./Buttons.js"

export const initial = () => {
    const startGameButton = startGame()
    return `${startGameButton}`
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

export const round1 = async () => {
    const games = await transientGameState
    const gameArr = games.map((game) => {
        return `<section>
        <h2 id="${game.teams.team1.teamId}">${game.teams.team1.name}</h2>
        <h3>Current Score</h3><br>
        ${game.teams.team1.score}
        `
    })
return gameArr


}

const round2 = ""

const finalRound = ""

const winnerScreen = ""