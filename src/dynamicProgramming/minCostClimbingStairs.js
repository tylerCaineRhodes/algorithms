/*
  bottom up
*/
function minCost(cost) {
  const n = cost.length;
  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
}

function minCost(cost) {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[n] = 0;
  dp[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    dp[i] = Math.min(dp[i + 1] + cost[i + 1], dp[i + 2] + cost[i + 2]);
  }
  return dp[0];
}

/*
  top down
*/

var minCostClimbingStairs = function (cost) {
  const memo = {};

  function minCost(step) {
    if (step <= 1) return 0;
    if (step in memo) return memo[step];

    memo[step] = Math.min(
      cost[step - 1] + minCost(step - 1),
      cost[step - 2] + minCost(step - 2)
    );
    return memo[step];
  }

  return minCost(cost.length);
};

/*

minCost = [0, 0, 0, 0, 0, 0, 0]
cost    = [0, 1, 2, 3, 4, 5]
minCost[i] = min(minCost[i - 1] + cost[i - 1], minCost[i - 2] + cost[i - 2])
*/
