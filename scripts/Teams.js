export const fetchTeams = async () => {
  const teams = await fetch("http://localhost:8088/teams").then((res) =>
    res.json()
  );
  return teams;
};

// TODO: COme back here

export const teamsDropdown = async () => {
  const teams = await fetchTeams();
  let html = `<select id="team_choice">
                <option value="0"> Choose a team...</option>`;
  const teamsArray = teams.map((team) => {
    return `<option id="team" value="${team.id}"> ${team.name} </option>`;
  });
  html += teamsArray.join("");
  html += `</select>`;
  return html;
};

export const team1Dropdown = async () => {
  const teams = await fetchTeams();
  let html = `<select id="team1_choice">
                <option value="0"> Choose a team...</option>`;
  const teamsArray = teams.map((team) => {
    return `<option id="team1" data-name="${team.name}" value="${team.id}"> ${team.name} </option>`;
  });
  html += teamsArray.join("");
  html += `</select>`;
  return html;
};

export const team2Dropdown = async () => {
  const teams = await fetchTeams();
  let html = `<select id="team2_choice">
                <option value="0"> Choose a team...</option>`;
  const teamsArray = teams.map((team) => {
    return `<option id="team" value="${team.id}"> ${team.name} </option>`;
  });
  html += teamsArray.join("");
  html += `</select>`;
  return html;
};
export const team3Dropdown = async () => {
  const teams = await fetchTeams();
  let html = `<select id="team3_choice">
                <option value="0"> Choose a team...</option>`;
  const teamsArray = teams.map((team) => {
    return `<option id="team" value="${team.id}"> ${team.name} </option>`;
  });
  html += teamsArray.join("");
  html += `</select>`;
  return html;
};



const teamState = {
  name: "",
  createdDate: 0,
};

const setTeamName = (teamName) => {
  teamState.name = teamName;
  const currentDate = new Date().toISOString().substring(0, 10);
  teamState.createdDate = currentDate;
  console.log(teamState);
};

const handleTeam = (event) => {
  if (event.target.name === "team") {
    setTeamName(event.target.value);
  }
};

export const teamInput = () => {
  document.addEventListener("change", handleTeam);

  let teamName = `
  <h3> Create a New Team </h3>
  <form class="creation--team">
  <label for="team">New Team Name</label><br>
  <input type="text" placeholder="Input Name Here" id="team" name="team"><br>

  </form>`;

  return teamName;
};

export const addTeam = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teamState),
  };
  const response = await fetch("http://localhost:8088/teams", postOptions);

  const customEvent = new CustomEvent("SaveTeam");
  document.dispatchEvent(customEvent);
};

//document.addEventListener("SavePlayer", renderCreationHTML)
//document.addEventListener("SaveTeam", renderCreationHTML)
