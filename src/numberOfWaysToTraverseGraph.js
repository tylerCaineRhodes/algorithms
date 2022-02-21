function numberOfWaysToTraverseGraph(width, height) {
  if(height === 1 || width === 1) return 1;
  return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
}

function numberOfWaysToTraverseGraph(width, height) {
  const memo = new Array(height + 1).fill('').map((val) => new Array(width + 1).fill(0))
  for(let r = 1; r < height + 1; r++) {
    for(let c = 1; c < width + 1; c++) {
      if(r === 1 || c === 1) {
        memo[r][c] = 1;
      } else {
        memo[r][c] = memo[r - 1][c] + memo[r][c - 1]
      }
    }
  }
  return memo[height][width];
}
