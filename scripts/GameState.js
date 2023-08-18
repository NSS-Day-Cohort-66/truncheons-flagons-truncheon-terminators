import { teamsDropdown } from "./Teams";
import {
  setTeamName,
  setTeamScore,
  transientGameState,
  resetTransientGameState,
  generateScoreCard,
  postTeamScoreCard,
} from "./currentGame.js";


const displayFinalScores = () => {
    const teams = transientGameState.teams
    finalScoreArray = teams.map(team => {
        return `<div>
            ${team.name} scored ${team.score} points
        </div>
        `
    })
    finalScoresHTML = `<section class='finalScore'>${finalScoreArray.join("")}</section>`
    return finalScoresHTML
}

const displayWinner = () => {
    const teams = transientGameState.teams
    let winner = ""
    let winnerScore = 0
    for (const team of teams ){
        if (team.score > winnerScore){
            winner = team.name
        } 
    }
    let winnerHTML = ""
    if (winner > 0){
        winnerHTML = `Team ${winner} has won this time!`
    } else {
        winnerHTML = `There was no winner`
    }
    return winnerHTML
}

