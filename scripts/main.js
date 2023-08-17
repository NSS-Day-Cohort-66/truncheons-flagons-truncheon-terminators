const mainContainer = document.querySelector(".container");

const renderInitialHTML = async () => {
  const outputHTML = `<h1>TEST YOUR CODE</h1>
    `;

  mainContainer.innerHTML = outputHTML;
};

renderInitialHTML();
