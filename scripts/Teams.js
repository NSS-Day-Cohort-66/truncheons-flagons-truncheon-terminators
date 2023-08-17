const fetchTeams = async () => {
  const teams = await fetch("http://localhost:8088/teams").then((res) =>
    res.json()
  );
  return teams;
};

const teams = fetchTeams();

export const teamsDropdown = async () => {
  let html = `<select id="team_choice">
                <option value="0"> Choose a team...</option>`;
  const teamsArray = teams.map((team) => {
    return `<option value="${team.id}"> ${team.name} </option>`;
  });
  html += teamsArray.join("");
  html += `</select>`;
  return html;
};
