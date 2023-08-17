const fetchScores = async () => {
  const scores = await fetch("http://localhost:8088/scores?_expand=team").then(
    (res) => res.json()
  );
  return scores;
};

const leaderboard = await fetchScores();

export const leaderboardOutput = () => {
  const sorted = [...leaderboard].sort((a, b) => b.teamScore - a.teamScore);
  let output = sorted.map((board) => {
    return `${board.team.name} scored ${board.teamScore}`;
  });
  output.join("");
  return output;
};
