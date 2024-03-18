function maxSumIncreasingSubsequence(array) {
  /*
                                i
                            j
 array =  [8, 12, 2, 3, 15, 5,  7]
          [8, 20, 2, 5, 35, 10, 17]       
          recurrence relation:
          dp[i] = max(dp[i], array[i] + dp[j])
  */

  const n = array.length;
  const sequences = new Array(n);
  const dp = array.slice();

  let maxSumIdx = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= array[i]) continue;

      if (dp[j] + array[i] >= dp[i]) {
        dp[i] = dp[j] + array[i];
        sequences[i] = j;
      }
    }
    if (dp[i] >= dp[maxSumIdx]) {
      maxSumIdx = i;
    }
  }
  return [dp[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}

/*
 top down

 base_cases
 idx === 1 -> return 2
 idx === 0 -> return 1
*/
function climbStairs(n) {
  const memo = new Array(n);
  return countStairs(n - 1);

  function countStairs(idx) {
    if (idx === 1) return 2;
    if (idx === 0) return 1;

    if (idx in memo) return memo[idx];

    memo[idx] = countStairs(idx - 2) + countStairs(idx - 1);
    return memo[idx];
  }
}

/*
  bottom up
  base_cases:

  idx > n -> 0 (there are 0 ways to climb the stairs)
  idx === n -> 1 (there is 1 way to climb n stairs from the top)
*/

function climbStairs(n) {
  const memo = new Array(n);
  return countStairs(0);

  function countStairs(idx) {
    if (idx > n) return 0;
    if (idx === n) return 1;

    if (idx in memo) return memo[idx];
    memo[idx] = countStairs(idx + 2) + countStairs(idx + 1);
    return memo[idx];
  }
}

function climbStairs(n) {
  const memo = {};
  memo[0] = 1;
  memo[1] = 2;
  return countStairs(2);

  function countStairs(idx) {
    if (idx > n) return 0;
    if (idx in memo) return memo[idx];

    memo[idx] = countStairs(idx + 2) + countStairs(idx + 1);
    return memo[idx];
  }
}
