function removeIslands(matrix) {
  const seen = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(false));

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const isBorderRow = r === 0 || r === matrix.length - 1;
      const isBorderCol = c === 0 || c === matrix[0].length - 1;
      const isBorder = isBorderCol || isBorderRow;

      if (isBorder && matrix[r][c] === 1) {
        dfs(matrix, r, c, seen);
      }
    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (seen[r][c]) continue;
      if (matrix[r][c] === 1) {
        matrix[r][c] = 0;
      }
    }
  }
  return matrix;
}

function dfs(matrix, r, c, seen) {
  const stack = [[r, c]];

  while (stack.length) {
    const [r, c] = stack.pop();
    if (seen[r][c]) continue;
    seen[r][c] = true;

    for (const neighbor of getNeighbors(matrix, r, c)) {
      const [neighborRow, neighborCol] = neighbor;
      if (matrix[neighborRow][neighborCol] !== 1) continue;
      stack.push(neighbor);
    }
  }
}

function getNeighbors(matrix, r, c) {
  const neighbors = [];
  if (r > 0) neighbors.push([r - 1, c]);
  if (r < matrix.length - 1) neighbors.push([r + 1, c]);
  if (c > 0) neighbors.push([r, c - 1]);
  if (c < matrix[0].length - 1) neighbors.push([r, c + 1]);
  return neighbors;
}

function removeIslands(matrix) {
  const seen = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(false));

  for (let r = 0; r < matrix.length; r++) {
    dfs(matrix, r, 0, seen);
    dfs(matrix, r, matrix[0].length - 1, seen);
  }

  for (let c = 0; c < matrix[0].length; c++) {
    dfs(matrix, 0, c, seen);
    dfs(matrix, matrix.length - 1, c, seen);
  }

  for (let r = 1; r < matrix.length - 1; r++) {
    for (let c = 1; c < matrix[0].length - 1; c++) {
      if (seen[r][c]) continue;
      if (matrix[r][c] === 1) {
        matrix[r][c] = 0;
      }
    }
  }
  return matrix;
}

function dfs(matrix, r, c, seen) {
  if (r < 0 || c < 0) return;
  if (r > matrix.length - 1 || c > matrix[0].length - 1) return;
  if (seen[r][c]) return;
  if (matrix[r][c] === 0) return;

  seen[r][c] = true;

  dfs(matrix, r - 1, c, seen);
  dfs(matrix, r + 1, c, seen);
  dfs(matrix, r, c - 1, seen);
  dfs(matrix, r, c + 1, seen);
}
