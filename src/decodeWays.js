var numDecodings = function (str) {
  const n = str.length;
  const dp = new Array(n + 1).fill(0);

  let twoBack = 1;
  let oneBack = str[0] === '0' ? 0 : 1;

  for (let i = 2; i < n + 1; i++) {
    let curr = 0;

    if (str[i - 1] !== '0') {
      curr = oneBack;
    }
    const prevDoubleDigit = Number(str.slice(i - 2, i));
    if (prevDoubleDigit >= 10 && prevDoubleDigit <= 26) {
      curr += twoBack;
      dp[i] += dp[i - 2];
    }
    twoBack = oneBack;
    oneBack = curr;
  }
  return dp[n];
};

var numDecodings = function (str) {
  // Top Down approach
  const memo = {};
  function dfs(i) {
    if (i in memo) return memo[i];
    if (i >= str.length - 1) return 1;
    if (str[i] === '0') return 0;

    let count = dfs(i + 1);
    if (Number(str.slice(i, i + 2) <= 26)) {
      count += dfs(i + 2);
    }
    memo[i] = count;
    return memo[i];
  }
  return dfs(0);
};

var numDecodings = function (str) {
  /*
  Bottom Up
    dp[i] = dp[i - 1] + dp[i - 2]
    dp[i] = dp[i - 1]
    if prevDouble <= 26:
      dp[i] += dp[i - 2];
  */

  const n = str.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = str[0] === '0' ? 0 : 1;

  for (let i = 2; i < n + 1; i++) {
    if (str[i - 1] !== '0') {
      dp[i] = dp[i - 1];
    }
    const prevDoubleDigit = Number(str.slice(i - 2, i));

    if (prevDoubleDigit >= 10 && prevDoubleDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};
