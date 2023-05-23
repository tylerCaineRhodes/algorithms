/*
clockwise
   new row is from old column: newMatrix[row][col] = oldMatrix[?][row]
   new column: (maxRowIdx - row): newMatrix[row][col] = oldMatrix[maxRowIdx - col]
   maxRowIdx = maxtrix[0].length - 1;
*/
function rotateMatrix(matrix, direction) {
  if (!matrix.length || !matrix[0].length) return matrix;

  const maxRowIdx = matrix[0].length - 1;
  const rotated = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length));

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (!direction) {
        rotated[r][c] = matrix[maxRowIdx - c][r];
      } else {
        rotated[r][c] = matrix[c][maxRowIdx - r];
      }
    }
  }
  return rotated;
}

function rotateMatrixInPlace(matrix) {
  reverseDiagonals(matrix);
  for (const row of matrix) {
    // translate
    row.reverse();
  }
  return matrix;
}

function reverseDiagonals(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < r; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  return matrix;
}

function assertEquals(actualMatrix, expectedMatrix) {
  if (actualMatrix.length !== expectedMatrix.length) return false;
  if (actualMatrix[0].length !== expectedMatrix[0].length) return false;

  for (let r = 0; r < actualMatrix.length; r++) {
    for (let c = 0; c < actualMatrix[0].length; c++) {
      if (actualMatrix[r][c] !== expectedMatrix[r][c]) return false;
    }
  }
  return true;
}

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 'a', 'b', 'c'],
  ['d', 'e', 'f', 'g'],
];

const expected1Clockwise = [
  ['d', 9, 5, 1],
  ['e', 'a', 6, 2],
  ['f', 'b', 7, 3],
  ['g', 'c', 8, 4],
];

const expected1CounterClockwise = [
  [4, 8, 'c', 'g'],
  [3, 7, 'b', 'f'],
  [2, 6, 'a', 'e'],
  [1, 5, 9, 'd'],
];

console.log(rotateMatrix(matrix1));
assertEquals(rotateMatrix(matrix1), expected1Clockwise);
assertEquals(rotateMatrixInPlace(matrix1), expected1Clockwise);
assertEquals(rotateMatrix(matrix1, 1), expected1CounterClockwise);
