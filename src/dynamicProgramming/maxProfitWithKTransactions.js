function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;
  const profits = new Array(k + 1)
    .fill(0)
    .map((val) => new Array(prices.length).fill(0));

  for (let i = 1; i < profits.length; i++) {
    let maxSoFar = -Infinity;
    for (let j = 1; j < profits[0].length; j++) {
      maxSoFar = Math.max(maxSoFar, profits[i - 1][j - 1] - prices[j - 1]);
      profits[i][j] = Math.max(profits[i][j - 1], maxSoFar + prices[j]);
    }
  }
  return profits[profits.length - 1][profits[0].length - 1];
}
