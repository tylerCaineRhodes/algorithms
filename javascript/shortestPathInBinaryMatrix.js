function shortestPathBinaryMatrix(grid) {
  const firstValueIsOne = grid[0][0] === 1;
  const lastValueIsOne = grid[grid.length - 1][grid[0].length - 1] === 1;
  if (firstValueIsOne || lastValueIsOne) return -1;
  
  const visitedMatrix = createAuxMatrix(grid);
  const neighborCoordinateOffsets = [[0, -1],[-1, -1],[-1, 0],[-1, -1],[0, 1],[1, 1],[1, 0],[1, -1]];
  const queue = [[0, 0, 1]];
  visitedMatrix[0][0] = true;

  while (queue.length) {
    const numberOfTraverseableNeighbors = queue.length;
    for (let i = 0; i < numberOfTraverseableNeighbors; i++) {
      const [row, col, path] = queue.shift();
      if (row === grid.length - 1 && col === grid[0].length - 1) {
        return path;
      }

      for (let j = 0; j < neighborCoordinateOffsets.length; j++) {
        const [offsetRow, offsetCol] = neighborCoordinateOffsets[j];
        const newRow = row + offsetRow;
        const newCol = col + offsetCol;

        if (canTraverse(newRow, newCol, grid, visitedMatrix)) {
          visitedMatrix[newRow][newCol] = true;
          queue.push([newRow, newCol, path + 1]);
        } else {
          continue;
        }
      }
    }
  }
  return -1;
}

function createAuxMatrix(grid) {
  const newMatrix = grid.map((row) => row.map((val) => false));
  return newMatrix;
}

function canTraverse(row, col, matrix, visited) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
    return false;
  } else if (matrix[row][col] === 1 || visited[row][col] === true) {
    return false;
  } else {
    return true;
  }
}
