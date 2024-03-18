function kadanes(array) {
  /*
    dp[i] = max(array[i] + dp[i - 1], array[i])
  */

  const n = array.length;
  const dp = new Array(n);

  let maxSum = array[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(array[i] + dp[i - 1], array[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
}

function kadanes(arr) {
  let maxSum = arr[0];
  let currSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

function kadanes(arr) {
  let maxSum = arr[0];
  let currSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currSum += arr[i];
    maxSum = Math.max(maxSum, currSum);
    currSum = Math.max(0, currSum);
  }
  return maxSum;
}

function kadanes(arr) {
  const maxSubArr = [0, 0];

  let max = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > max) {
      max = currentSum;
      maxSubArr[1] = i + 1;
    }

    if (currentSum < 0) {
      currentSum = 0;
      maxSubArr[0] = i + 1;
    }
  }
  return arr.slice(maxSubArr[0], maxSubArr[1]);
}

console.log(
  'expected: { sum: 7, arr: [4, -1, -2, 1, 5] }',
  `actual arr: [${kadanes([-2, -3, 4, -1, -2, 1, 5, -3])}]`
);
console.log(
  'expected: { sum: 3, arr: [3] }',
  `actual arr: [ ${kadanes([1, -2, 3, -2])}]`
);
