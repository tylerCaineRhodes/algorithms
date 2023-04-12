/*
  Given a string and a pattern, find out if the string contains any permutation of
  the pattern. Permutation is defined as the re-arranging of the characters of the
  string. For example, “abc” has the following six permutations:

  abc
  acb
  bac
  bca
  cab
  cba

  Input: String="oidbcaf", Pattern="abc"
  Output: true

  Input: String="odicf", Pattern="dc"
  Output: false

  Input: String="bcdxabcdy", Pattern="bcdyabcdx"
  Output: true

  Input: String="aaacb", Pattern="abc"
  Output: true

  If a string has ‘n’ distinct characters, it will have n!  n!  permutations.

  https://leetcode.com/problems/permutation-in-string/
  
  The variables don't map exactly to the leetcode problem. LC has them flipped.

  s1 = pattern
  s2 = str
*/
export type CharCount = { [key: string]: number };

class HashWithDefault implements CharCount {
  [key: string]: number;

  constructor(defaultVal: number) {
    return new Proxy({}, {
      get: (object: CharCount, property: string) => {
        return object[property] ? object[property] : defaultVal
      }
    });
  }
}

export function findPermutationSimple(str: string, pattern: string): boolean {
  const charFrequency = pattern.split('').reduce((acc: HashWithDefault, char) => {
    acc[char]++;
    return acc;
  }, new HashWithDefault(0));

  const matchedCharHash: CharCount = new HashWithDefault(0);

  let matchedCharCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charFrequency) {
      matchedCharHash[rightChar]++;
      if (matchedCharHash[rightChar] === charFrequency[rightChar]) {
        matchedCharCount++;
      }
    }
    if (matchedCharCount === Object.keys(charFrequency).length) return true;

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart++;
      if (leftChar in charFrequency) {
        matchedCharHash[leftChar]--;
        if (matchedCharHash[leftChar] < charFrequency[leftChar]) {
          matchedCharCount--;
        }
      }
    }
  }
  return false;
}

// o(n + m)
export function findPermutation(str: string, pattern: string): boolean {
  const charFrequency = pattern.split('').reduce((acc: CharCount, char) => {
    acc[char] = acc[char]++ || 1;
    return acc;
  }, {});

  const numberOfCharsToMatch = Object.keys(charFrequency).length;

  let matchedCharCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      const allInstancesOfCharMatched = charFrequency[rightChar] === 0;
      if (allInstancesOfCharMatched) {
        matchedCharCount++;
      }
    }

    if (matchedCharCount === numberOfCharsToMatch) return true;

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart++;

      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matchedCharCount--;
        }
        charFrequency[leftChar]++;
      }
    }
  }
  return false;
}

// o(min(n + m))^2
export function findPermutationII(str: string, pattern: string): boolean {
  const patternHash = pattern.split('').reduce((acc: CharCount, char) => {
    char in acc ? acc[char]++ : (acc[char] = 1);
    return acc;
  }, {});

  let storage: CharCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!(char in patternHash)) {
      storage = {};
      continue;
    }

    char in storage ? storage[char]++ : (storage[char] = 1);

    if (storage[char] > patternHash[char]) storage[char]--;
    if (allValuesMatch(storage, patternHash)) return true;
  }
  return false;
}

function allValuesMatch(storage: CharCount, patternHash: CharCount) {
  for (const key in patternHash) {
    const storageCount = storage[key];
    const patternCount = patternHash[key];

    if (storageCount !== patternCount) {
      return false;
    }
  }
  return true;
}
