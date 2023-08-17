const fetchScores = async () => {
    const scores = await fetch("http://localhost:8088/scores?_expand=team").then((res) =>
      res.json()
    );
    return scores;
  };
  