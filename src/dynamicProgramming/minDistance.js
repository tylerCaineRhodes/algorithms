var minDistance = function (word1, word2) {
  let rows = new Array(word1.length + 1),
    matrix = Array.from(rows, () => new Array(word2.length + 1).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0) {
        matrix[0][j] = j;
      } else if (j === 0) {
        matrix[i][j] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          1 +
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
    }
  }
  return matrix[word1.length][word2.length];
};

console.log(minDistance('horse', 'ros'));
