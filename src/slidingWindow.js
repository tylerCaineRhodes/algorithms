function slidingWindowExample() {
  const SOME_LENGTH = 10;
  const k = 5;

  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < SOME_LENGTH; windowEnd++) {
    const len = windowEnd - windowStart + 1;
    if (len >= k) {
      console.log({ windowStart, windowEnd, len });
      windowStart++;
    }
  }
}

function findAverageOfSubArrays(k, arr) {
  const result = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    result.push(sum / k);
  }
  return result;
}

function maxSubArrayOfSizeK(k, arr) {
  let maxSum = 0,
    windowSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for (let j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

function maxSubArrayOfSizeK(k, arr) {
  let max = 0;
  let windowStart = 0;

  let currSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      currSum -= arr[windowStart];
      windowStart++;
    }
    max = Math.max(currSum, max);
  }
  return max;
}

function findAverageOfSubArrays2(k, arr) {
  const result = [];
  let windowStart = 0;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      result.push(sum / k);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
}

const smallestSubarraySum = function (s, arr) {
  if (arr.reduce((acc, val) => acc + val, 0) < s) return 0;

  let smallest = arr.length;
  let sum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    while (sum >= s) {
      const currentWindowSize = windowEnd - windowStart + 1;
      if (currentWindowSize < smallest) {
        smallest = currentWindowSize;
      }
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return smallest;
};

const longestSubstringWithKDistinct = function (str, k) {
  const uniqueChars = new Set();
  let maxLength = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    uniqueChars.add(char);
    console.log(uniqueChars.size, k);

    if (uniqueChars.size <= k) {
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    while (uniqueChars.size > k) {
      uniqueChars.delete(str[windowStart]);
      windowStart++;
    }
  }
  return maxLength === -Infinity ? 0 : maxLength;
};

const fruitsIntoBaskets = function (fruits) {
  const uniqueFruits = {};

  let maxFruits = -Infinity;
  let treeStart = 0;

  for (let treeEnd = 0; treeEnd < fruits.length; treeEnd++) {
    const fruit = fruits[treeEnd];

    if (!(fruit in uniqueFruits)) uniqueFruits[fruit] = 0;

    uniqueFruits[fruit]++;

    if (Object.keys(uniqueFruits).length <= 2) {
      maxFruits = Math.max(maxFruits, treeEnd - treeStart + 1);
    }

    while (Object.keys(uniqueFruits).length > 2) {
      const fruitToRemove = fruits[treeStart];
      uniqueFruits[fruitToRemove]--;

      if (uniqueFruits[fruitToRemove] === 0) {
        delete uniqueFruits[fruitToRemove];
      }
      treeStart++;
    }
  }
  return maxFruits === -Infinity ? 0 : maxFruits;
};

const nonRepeatSubstring = function (str) {
  const uniqueChars = {};
  let maxLength = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    if (!(char in uniqueChars)) uniqueChars[char] = 0;
    uniqueChars[char]++;

    while (Object.values(uniqueChars).some((val) => val > 1)) {
      const charToRemove = str[windowStart];
      uniqueChars[charToRemove]--;
      if (uniqueChars[charToRemove] === 0) {
        delete uniqueChars[charToRemove];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength === -Infinity ? 0 : maxLength;
};

function nonRepeatSubstring(str) {
  const uniqueChars = {};
  let maxLength = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];

    if (char in uniqueChars) {
      windowStart = Math.max(windowStart, uniqueChars[char] + 1);
    }

    uniqueChars[char] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength === -Infinity ? 0 : maxLength;
}
