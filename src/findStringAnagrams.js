function findStringAnagrams(str, pattern) {
  const resultIndexes = [];

  const patternHash = pattern.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const numberOfCharsToMatch = Object.keys(patternHash).length;

  let matchedChars = 0;
  let startIdx = 0;

  for (let endIdx = 0; endIdx < str.length; endIdx++) {
    const rightChar = str[endIdx];

    if (rightChar in patternHash) {
      patternHash[rightChar]--;
      if (patternHash[rightChar] === 0) {
        matchedChars++;
      }

      if (matchedChars === numberOfCharsToMatch) {
        resultIndexes.push(startIdx);
      }

      if (endIdx >= pattern.length - 1) {
        const leftChar = str[startIdx];
        startIdx++;
        if (leftChar in patternHash) {
          if (patternHash[leftChar] === 0) {
            matchedChars--;
          }
          patternHash[leftChar]++;
        }
      }
    }
  }
  return resultIndexes;
}
console.log(findStringAnagrams('ppqp', 'pq')); // expected: [1, 2]
console.log(findStringAnagrams('abbcabc', 'abc')); // expected: [2, 3, 4]
