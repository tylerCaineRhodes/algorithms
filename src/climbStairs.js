function climbStairs(n) {
  return getNumberOfClimbs(0, n);
}

function getNumberOfClimbs(step, n) {
  const stepIsOutOfBounds = step > n;
  const isAtLastStep = step === n;

  if (stepIsOutOfBounds) return 0;
  if (isAtLastStep) return 1;

  return getNumberOfClimbs(step + 1, n) + getNumberOfClimbs(step + 2, n);
}

function climbStairsWithMemo(n) {
  const memo = {};
  return getNumberOfClimbsWithMemo(0, n, memo);
}

function getNumberOfClimbsWithMemo(step, n, memo) {
  const stepIsOutOfBounds = step > n;
  const isAtLastStep = step === n;

  if (stepIsOutOfBounds) {
    return 0;
  }
  if (isAtLastStep) {
    return 1;
  }

  if (memo[step] > 0) {
    return memo[step];
  }
  memo[step] =
    getNumberOfClimbsWithMemo(step + 1, n, memo) +
    getNumberOfClimbsWithMemo(step + 2, n, memo);
  return memo[step];
}

function climbStairsIII(n) {
  const numberOfSteps = new Array(n).fill(0);
  [numberOfSteps[0], numberOfSteps[1]] = [1, 2];

  for (let i = 2; i < numberOfSteps.length; i++) {
    numberOfSteps[i] = numberOfSteps[i - 1] + numberOfSteps[i - 2];
  }
  return numberOfSteps[numberOfSteps.length - 1];
}

//   You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
  // dp[i] = dp[i + 1] + dp[i + 2]
  const memo = new Array(n).fill(0);

  function handleStep(step) {
    if (step > n) return 0;
    if (step === n) return 1;

    if (memo[step] > 0) return memo[step];

    memo[step] = handleStep(step + 1) + handleStep(step + 2);
    return memo[step];
  }

  return handleStep(0);
}

function climbStairsII(n) {
  // dp[i] = dp[i - 1] + dp[i - 2]
  if (n === 1) return 1;

  const dp = new Array(n);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}
