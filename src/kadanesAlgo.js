function kadanes(arr) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
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
