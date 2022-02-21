function climbStairs(n) {
  return getNumberOfClimbs(0, n)
}

function getNumberOfClimbs(step, n) {
  const stepIsOutOfBounds = step > n;
  const isAtLastStep = step === n;

  if (stepIsOutOfBounds) return 0;
  if(isAtLastStep) return 1
  
  return getNumberOfClimbs(step + 1, n) + getNumberOfClimbs(step + 2, n);
}

function climbStairsWithMemo(n) {
  const memo = {}
  return getNumberOfClimbsWithMemo(0, n, memo)
}

function getNumberOfClimbsWithMemo(step, n, memo) {
  const stepIsOutOfBounds = step > n;
  const isAtLastStep = step === n;

  if (stepIsOutOfBounds) {
    return 0;
  }
  if(isAtLastStep) {
    return 1;
  }

  if(memo[step] > 0) {
    return memo[step]
  }
  memo[step] = getNumberOfClimbsWithMemo(step + 1, n, memo) + getNumberOfClimbsWithMemo(step + 2, n, memo)
  return memo[step];
}

function climbStairsIII(n) {
  const numberOfSteps = new Array(n).fill(0);
 [numberOfSteps[0], numberOfSteps[1]] = [1, 2];

 for(let i = 2; i < numberOfSteps.length; i++) {
  numberOfSteps[i] = numberOfSteps[i - 1] + numberOfSteps[i  - 2];
 }
 return numberOfSteps[numberOfSteps.length - 1]
}
