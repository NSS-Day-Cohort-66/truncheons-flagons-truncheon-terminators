const fetchTeams = async () => {
  const teams = await fetch("http://localhost:8088/teams").then((res) =>
    res.json()
  );
  return teams;
};
