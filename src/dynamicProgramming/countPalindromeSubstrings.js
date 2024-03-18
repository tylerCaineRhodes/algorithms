var countSubstrings = function (s) {
  /*
  base_cases

  dp[i][i] === true
  dp[i][i + 1] = s[i] === s[i + 1]

  recurrence_case
  dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
  */
  const n = s.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill().map(() => new Array(n).fill(false));

  let count = 0;
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;

      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        count++;
      }
    }
  }
  return count;
};

var countSubstrings = function (s) {
  const n = s.length;
  if (n.length === 1) return 1;

  let count = 0;
  for (let i = 0; i < n; i++) {
    count += countPalendromeSubstrings(i, i, s);
    count += countPalendromeSubstrings(i, i + 1, s);
  }
  return count;
};

function countPalendromeSubstrings(start, end, str) {
  let count = 0;

  while (start >= 0 && end < str.length) {
    if (str[start] !== str[end]) break;

    count++;

    start--;
    end++;
  }

  return count;
}
