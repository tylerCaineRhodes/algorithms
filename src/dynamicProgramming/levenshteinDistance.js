function levenshteinDistance(str1, str2) {
  const row = new Array(str1.length + 1);
  const edits = Array.from(row, () => new Array(str2.length + 1).fill(0));

  for (let col = 0; col < str2.length + 1; col++) {
    edits[0][col] = col;
  }
  for (let row = 0; row < str1.length + 1; row++) {
    edits[row][0] = row;
  }

  for (let row = 1; row < str1.length + 1; row++) {
    for (let col = 1; col < str2.length + 1; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        edits[row][col] = edits[row - 1][col - 1];
      } else {
        edits[row][col] =
          1 +
          Math.min(
            edits[row][col - 1],
            edits[row - 1][col],
            edits[row - 1][col - 1]
          );
      }
    }
  }
  return edits[str1.length][str2.length];
}

function levenshteinDistanceII(str1, str2) {
  const row = new Array(str1.length + 1);
  const edits = Array.from(row, () => new Array(str2.length + 1).fill(0));

  for (let row = 0; row < edits.length; row++) {
    for (let col = 0; col < edits[row].length; col++) {
      if (row === 0) {
        edits[0][col] = col;
        continue;
      }

      if (col === 0) {
        edits[row][0] = row;
        continue;
      }

      if (str1[row - 1] === str2[col - 1]) {
        edits[row][col] = edits[row - 1][col - 1];
      } else {
        edits[row][col] =
          1 +
          Math.min(
            edits[row][col - 1],
            edits[row - 1][col],
            edits[row - 1][col - 1]
          );
      }
    }
  }
  return edits[str1.length][str2.length];
}

console.log(levenshteinDistance('abc', 'yabd'));
