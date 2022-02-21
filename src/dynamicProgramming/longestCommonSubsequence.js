export function longestCommonSubsequence(str1, str2) {
  const subsequences = createSubSequenceMatrix(str1, str2);
  for (let r = 1; r < str2.length + 1; r++) {
    for (let c = 1; c < str1.length + 1; c++) {
      if (str2[r - 1] === str1[c - 1]) {
        subsequences[r][c] = subsequences[r - 1][c - 1].concat(str2[r - 1]);
      } else {
        if (subsequences[r - 1][c].length > subsequences[r][c - 1].length) {
          subsequences[r][c] = subsequences[r - 1][c];
        } else {
          subsequences[r][c] = subsequences[r][c - 1];
        }
      }
    }
  }
  return subsequences[subsequences.length - 1][subsequences[0].length - 1];
}

function createSubSequenceMatrix(str1, str2) {
  let matrix = [];
  for (let i = 0; i < str2.length + 1; i++) {
    let row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push([]);
    }
    matrix.push(row);
  }
  return matrix;
}
