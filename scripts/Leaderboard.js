const fetchScores = async () => {
  const scores = await fetch("http://localhost:8088/scores?_expand=team").then(
    (res) => res.json()
  );
  return scores;
};

const leaderboard = await fetchScores();

const leaderboardCompiler = async () => {
  // ? Sets a new map to hold the compiled data of score totals, iterates through the leaderboard to set scores
  const compiled = new Map();
  leaderboard.forEach((game) => {
    const { teamId, teamName, teamScore } = game;

    // ? Checks to see if compiled already has the team in the map, if not, creates a new object for that team.
    // ? If the team already exists, adds that game score to the total
    if (compiled.has(teamId)) {
      const selected = compiled.get(teamId);
      compiled.set(teamId, {
        teamName: selected.teamName,
        teamScore: selected.teamScore + teamScore,
      });
    } else {
      compiled.set(teamId, { teamName: game.team.name, teamScore });
    }
  });
  return compiled;
};

export const leaderboardOutput = async () => {
  let ranked = await leaderboardCompiler();
  const sorted = [...ranked].sort((a, b) => b[1].teamScore - a[1].teamScore);
  let output = sorted.map((rank) => {
    return `${rank[1].teamName} scored ${rank[1].teamScore}`;
  });
  return output;
};
