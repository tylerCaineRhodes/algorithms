const transpose = (matrix, n) => {
  for (let r = 0; r < n; r++) {
    for (let c = r + 1; c < n; c++) {
      const tmp = matrix[c][r];
      matrix[c][r] = matrix[r][c];
      matrix[r][c] = tmp;
    }
  }
};

const reflect = (matrix, n) => {
  for (let r = 0; r < n; r++) {
    let p1 = 0;
    let p2 = n - 1;

    const row = matrix[r];

    while (p1 < p2) {
      const tmp = row[p2];
      row[p2] = row[p1];
      row[p1] = tmp;

      p1++;
      p2--;
    }
  }
};

var rotate = function (matrix) {
  const n = matrix.length;

  transpose(matrix, n);
  reflect(matrix, n);

  return matrix;
};

function rotateMatrixInPlace(matrix) {
  lazyTranspose(matrix);
  return lazyReflect(matrix);
}

function lazyTranspose(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < r; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  return matrix;
}

function lazyReflect(matrix) {
  for (const row of matrix) {
    row.reverse();
  }
  return matrix;
}
