function shortestPathBinaryMatrix(grid) {
  if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0)
    return -1;

  const queue = [[0, 0]];
  grid[0][0] = 1;
  let distance;

  while (queue.length) {
    const [row, col] = queue.shift();
    distance = grid[row][col];
    if (row === grid.length - 1 && col === grid[0].length - 1) return distance;

    const unvisitedNeighbors = getNeighbors(row, col, grid);

    for (const [newRow, newCol] of unvisitedNeighbors) {
      grid[newRow][newCol] = distance + 1;
      queue.push([newRow, newCol]);
    }
  }
  return -1;
}

function getNeighbors(row, col, grid) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const unvisitedNeighbors = [];

  for (let [rowDiff, colDiff] of directions) {
    const newRow = row + rowDiff;
    const newCol = col + colDiff;

    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow > grid.length - 1 ||
      newCol > grid[0].length - 1
    )
      continue;
    if (grid[newRow][newCol] !== 0) continue;

    unvisitedNeighbors.push([newRow, newCol]);
  }
  return unvisitedNeighbors;
}

export { shortestPathBinaryMatrix };
