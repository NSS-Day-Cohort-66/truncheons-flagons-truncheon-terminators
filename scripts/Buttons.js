// Buttons for Dom

import { renderGameHTML } from "./GameState.js"
import { addPlayer } from "./Players.js"
import { teamSelect } from "./Rounds.js"
import { addTeam } from "./Teams.js"


const handleCreateTeam = (clickEvent) => {
    if (clickEvent.target.id === "create_team"){
        addTeam()
    }
}
export const createTeam = () => {
    document.addEventListener("click", handleCreateTeam) 
    return `<button class="team_button" id="create_team">CREATE TEAM</button>`
}



export const handleCreatePlayer = (clickEvent) => {
    if (clickEvent.target.id === "create_player"){
        addPlayer()
    }
}
export const createPlayer = () => {
    document.addEventListener("click", handleCreatePlayer)
    return `<button class="player_button" id="create_player">CREATE PLAYER</button>`
}



export const handleStartGame = (clickEvent) => {
    if (clickEvent.target.id === "start_game"){
        const teamSelectHTML = teamSelect()
        renderGameHTML(teamSelectHTML)
    }
}
export const startGame = () => {
    document.addEventListener("click", handleStartGame) 
    return `<button class="start_button" id="start_game">START GAME</button>`
}



const handleSubmitScore = (clickEvent) => {
    if (clickEvent.target.id === "save_score"){
        // button event for function
    }
}
export const submitScore = () => {
    document.addEventListener("click", handleSubmitScore)
    return `<button class="submit_button" id="save_score">SUBMIT SCORE!</button>`
}



const handlePlayAgain = (clickEvent) => {
    if (clickEvent.target.id === "play_again"){
        //button event for function
    }
}
export const playAgain = () => {
    document.addEventListener("click", handlePlayAgain)
    return `<button class="play_button" id="play_again">PLAY AGAIN?</button>`
}