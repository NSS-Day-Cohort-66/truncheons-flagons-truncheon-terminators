const fetchScores = async () => {
  const scores = await fetch("http://localhost:8088/scores?_expand=team").then(
    (res) => res.json()
  );
  return scores;
};

const fetchTeams = async () => {
  const teams = await fetch("http://localhost:8088/teams").then((res) =>
    res.json()
  );
  return teams;
};

const leaderboard = await fetchScores();

const leaderboardCompiler = async () => {
  const compiled = new Map();

  leaderboard.forEach((game) => {
    const { teamId, teamScore } = game;

    if (compiled.has(teamId)) {
      compiled.set(teamId, compiled.get(teamId) + teamScore);
    } else {
      compiled.set(teamId, teamScore);
    }
  });

  return compiled;
};

// const nameCompiler = async () => {
//   const names = await fetchTeams();
//   const ranked = await leaderboardCompiler();
//   const rankedArray = [...ranked];
//   const rankedNames = rankedArray.map((rank) => {
//     names.filter((team) => rank[0] === team.id);
//   });
//   debugger;
//   return rankedNames;
// };

// nameCompiler();

export const leaderboardOutput = async () => {
  let ranked = await leaderboardCompiler();
  const sorted = [...ranked].sort((a, b) => b[1] - a[1]);
  let output = sorted.map((rank) => {
    return `${rank[0]} scored ${rank[1]}`;
  });
  return output;
};
