import { playerInput } from "./Players.js";
import { createPlayer } from "./Buttons.js";



const mainContainer = document.querySelector(".container");

const renderInitialHTML = async () => {

  const playerSection = await playerInput()
  const playerButton = await createPlayer()
  
  
  const outputHTML = `<h1>TEST YOUR CODE</h1>
  ${playerSection}
  ${playerButton}
    `;

  mainContainer.innerHTML = outputHTML;
};

renderInitialHTML();
