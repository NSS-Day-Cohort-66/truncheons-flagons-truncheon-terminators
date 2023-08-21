
import { transientGameState } from "./currentGame.js"


const teamSelect = ""

export const round1 = async () => {
    const games = await transientGameState
    const gameArr = games.map((game) => {
        return `<section>
        <h2 id="${game.teams.team1.teamId}">${game.teams.team1.name}</h2>
        <h3>Current Score</h3><br>
        ${game.teams.team1.score}
        `
    })



}

const round2 = ""

const finalRound = ""

const winnerScreen = ""