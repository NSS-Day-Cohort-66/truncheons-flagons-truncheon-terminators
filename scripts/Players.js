import { teamsDropdown } from "./Teams.js";
import { createPlayer } from "./Buttons.js";


const fetchPlayers = async () => {
  const players = await fetch("http://localhost:8088/players").then((res) =>
    res.json()
  );
  return players;
};


const playerState = { 
  firstName: "",
  lastName: "",
  countryOfOrigin: "",
  teamId: 0
}

const setFirstName = (firstName) => {
  playerState.firstName = firstName;
  console.log(playerState)
}
const setLastName = (lastName) => {
  playerState.lastName = lastName;
  console.log(playerState)
}
const setCountryName = (countryName) => {
  playerState.countryOfOrigin = countryName;
  console.log(playerState)
}
const setTeamId = (teamId) => {
  playerState.teamId = teamId
  console.log(playerState)
}


const handleFirstName = (event) => {
  if (event.target.name === "fname"){
    setFirstName(event.target.value)
  }
}
const handleLastName = (event) => {
  if (event.target.name === "lname"){
    setLastName(event.target.value)
  }
}
const handleCountry = (event) => {
  if( event.target.name === "country") {
    setCountryName(event.target.value)
  }
}
const handleTeamSelect = (event) => {
  if ( event.target.id === "team_choice" ){
    setTeamId(parseInt(event.target.value))
  }
}

export const playerInput = async () => {

  const teamsMenu = await teamsDropdown()

  document.addEventListener("change", handleFirstName)
  document.addEventListener("change", handleLastName)
  document.addEventListener("change", handleCountry)
  document.addEventListener("change", handleTeamSelect)

  let playerName = `<form>
  <label for="fname">First Name</label><br>
  <input type="text" placeholder="First Name Input" id="fname" name="fname"><br>
  <label for="lname">Last Name</label><br>
  <input type="text" placeholder="Last Name Input" id="lname" name="lname"><br>
  <label for="country">Country of Origin</label><br>
  <input type="text" placeholder="Home Country" id="country" name="country"><br>
  ${teamsMenu}
  </form>`
  return playerName
}





export const addPlayer = async () => {

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playerState)
  }
  const response = await fetch("http://localhost:8088/players", postOptions)

 // const customEvent = new CustomEvent("SavePlayer")

//  document.dispatchEvent(customEvent)

}