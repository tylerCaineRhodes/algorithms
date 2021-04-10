function tournamentWinner(competitions, results) {
  let maxScoringTeam;
  let maxScore = 0;

  const scores = competitions.reduce((acc, dup, i) => {
    const [homeTeam, awayTeam] = dup;
    const winningTeam = results[i] === 1 ? homeTeam : awayTeam;
    acc[winningTeam] ? (acc[winningTeam] += 3) : (acc[winningTeam] = 3);
    return acc;
  }, {});

  for (const team in scores) {
    if (scores[team] > maxScore) {
      [maxScore, maxScoringTeam] = [scores[team], team];
    }
  }
  return maxScoringTeam;
}
