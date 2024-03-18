// // O(n^2)
var longestPalindrome = function (s) {
  // dp[i][j] = s[i]=== s[j] && dp[i + 1][j - 1]
  // dp[i][j] == substring i,j

  const n = s.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(false));
  let start = 0;
  let end = 0;

  // set all substrings of length 1 to true
  for (let i = 0; i < n; i++) {
    const j = i;
    dp[i][j] = true;
  }

  // check all substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];

    if (dp[i][i + 1]) {
      start = i;
      end = i + 1;
    }
  }

  for (let len = 2; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      const j = i + len;
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];

      if (dp[i][j]) {
        start = i;
        end = j;
      }
    }
  }
  return s.slice(start, end + 1);
};

// O(n^3)
function longestPalindrome(str) {
  let longest = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const currSubstring = str.slice(i, j + 1);
      if (isPalendrome(currSubstring)) {
        if (currSubstring.length < longest.length) {
          longest = currSubstring;
        }
      }
    }
  }
  return longest;
}

function isPalendrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

function longestPalindrome(str) {
  let longest = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const currSubstring = str.slice(i, j + 1);
      if (isPalendrome(currSubstring)) {
        if (currSubstring.length < longest.length) {
          longest = currSubstring;
        }
      }
    }
  }
  return longest;
}

// O(n^2) - better than DP because each call the `findPalFromCenter` is less
// likely to be a larger str

function longestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    const maxOddPal = findPalFromCenter(i, i, str);
    const maxEvenPal = findPalFromCenter(i, i + 1, str);

    const comparable =
      maxOddPal.length > maxEvenPal.length ? maxOddPal : maxEvenPal;

    if (comparable.length > longest.length) {
      longest = comparable;
    }
  }
  return longest;
}

function findPalFromCenter(start, end, str) {
  while (start >= 0 && end < str.length) {
    if (str[start] !== str[end]) break;
    start--;
    end++;
  }

  return str.slice(start + 1, end);
}
