const fetchPlayers = async () => {
  const players = await fetch("http://localhost:8088/players").then((res) =>
    res.json()
  );
  return players;
};
