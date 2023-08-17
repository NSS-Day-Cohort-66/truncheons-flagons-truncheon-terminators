// Buttons for Dom



const handleCreateTeam = (clickEvent) => {
    if (clickEvent.target.id === "create_team"){
        // Button event function
    }
}
export const createTeam = () => {
    document.addEventListener("click", handleCreateTeam) 
    return `<button class="team_button" id="create_team">CREATE TEAM</button>`
}



const handleCreatePlayer = (clickEvent) => {
    if (clickEvent.target.id === "create_player"){
        // button event for function
    }
}
export const createPlayer = () => {
    document.addEventListener("click", handleCreatePlayer)
    return `<button class="player_button" id="create_player">CREATE PLAYER</button>`
}



const handleStartGame = (clickEvent) => {
    if (clickEvent.target.id === "start_game"){
        // button event for function
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