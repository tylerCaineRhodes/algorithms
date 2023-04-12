/*
  Smallest Window containing Substring (hard). Given a string and a pattern, find
  the smallest substring in the given string which has all the character
  occurrences of the given pattern.

  Examples:

  Input: String="aabdec", Pattern="abc"
  Output: "abdec"

  Input: String="aabdec", Pattern="abac"
  Output: "aabdec"

  Input: String="abdbca", Pattern="abc"
  Output: "bca"

  Input: String="adcad", Pattern="abc"
  Output: ""

  https://leetcode.com/problems/minimum-window-substring/
*/

import type { CharCount } from './permutationInString';

function createPatternHash(pattern: string): CharCount {
  return pattern.split('').reduce((acc: CharCount, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

export function findSubstringSimple(str: string, pattern: string): string {
  const patternHash = createPatternHash(pattern);
  const matchedCharHash: CharCount = {};
  const numberOfCharsToMatch = Object.keys(patternHash).length;

  let currentResults = [Infinity, 0, 0];

  let matchedChars = 0;
  let startWindow = 0;

  for (let endWindow = 0; endWindow < str.length; endWindow++) {
    const rightChar = str[endWindow];

    matchedCharHash[rightChar] = (matchedCharHash[rightChar] || 0) + 1;

    if (rightChar in patternHash) {
      const charTotallyMatches = matchedCharHash[rightChar] === patternHash[rightChar];
      if (charTotallyMatches) {
        matchedChars++;
      }
    }

    while (matchedChars === numberOfCharsToMatch) {
      const windowLength = endWindow - startWindow + 1;
      const minLength = currentResults[0];

      if (minLength > windowLength) {
        currentResults = [windowLength, startWindow, endWindow];
      }

      const leftChar = str[startWindow];
      startWindow++;

      if (leftChar in patternHash) {
        matchedCharHash[leftChar]--;
        const isSubtractingChar = matchedCharHash[leftChar] < patternHash[leftChar];
        if (isSubtractingChar) {
          matchedChars--;
        }
      }
    }
  }
  if (currentResults[0] === Infinity) return '';
  const [start, end] = [currentResults[1], currentResults[2]];
  return str.slice(start, end + 1);
}

// o(n + m)
export function findSubstring(str: string, pattern: string): string {
  const patternHash = createPatternHash(pattern);

  let matchedChars = 0;
  let minSubstringLen = Infinity;

  let startSubstring = 0;
  let startWindow = 0;

  for (let endWindow = 0; endWindow < str.length; endWindow++) {
    const rightChar = str[endWindow];

    if (rightChar in patternHash) {
      patternHash[rightChar]--;
      const removedExistingChar = patternHash[rightChar] >= 0;

      if (removedExistingChar) {
        matchedChars++;
      }
    }

    while (matchedChars === pattern.length) {
      const windowLength = endWindow - startWindow + 1;

      if (minSubstringLen > windowLength) {
        minSubstringLen = windowLength;
        startSubstring = startWindow;
      }

      const leftChar = str[startWindow];
      startWindow++;

      if (leftChar in patternHash) {
        const isAddingMissingChar = patternHash[leftChar] === 0;
        if (isAddingMissingChar) {
          matchedChars--;
        }
        patternHash[leftChar]++;
      }
    }
  }

  if (minSubstringLen === Infinity) return '';
  return str.slice(startSubstring, startSubstring + minSubstringLen);
}
