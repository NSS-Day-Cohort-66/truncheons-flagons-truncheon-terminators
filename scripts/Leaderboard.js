const fetchScores = async () => {
    const scores = await fetch("http://localhost:8088/scores").then((res) =>
      res.json()
    );
    return scores;
  };
  