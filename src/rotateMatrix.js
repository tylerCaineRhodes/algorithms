export function rotateMatrix({ matrix, shouldRotateClockwise }) {
  if (!matrix.length || !matrix[0].length) return matrix;

  const rotated = new Array(matrix[0].length)
    .fill()
    .map(() => new Array(matrix.length));

  return shouldRotateClockwise
    ? rotateClockwise(matrix, rotated)
    : rotateCounterClockwise(matrix, rotated);
}

function rotateClockwise(matrix, rotated) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const newRow = c;
      const newCol = matrix.length - 1 - r;
      rotated[newRow][newCol] = matrix[r][c];
    }
  }
  return rotated;
}

function rotateCounterClockwise(matrix, rotated) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const newRow = matrix[0].length - 1 - c;
      const newCol = r;
      rotated[newRow][newCol] = matrix[r][c];
    }
  }
  return rotated;
}

// only works for n x n
export function rotateMatrixInPlace(matrix) {
  transpose(matrix);
  return reflect(matrix);
}

function transpose(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < r; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  return matrix;
}

function reflect(matrix) {
  for (const row of matrix) {
    row.reverse();
  }
  return matrix;
}
