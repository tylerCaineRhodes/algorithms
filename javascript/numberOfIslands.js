var numIslands = function (grid) {
  let numberOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        numberOfIslands++;
        dfs(grid, i, j);
      }
    }
  }
  return numberOfIslands;
};

function dfs(grid, r, c) {
  grid[r][c] = '0';
  if (r > 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c);
  if (c > 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1);
  if (r < grid.length - 1 && grid[r + 1][c] === '1') dfs(grid, r + 1, c);
  if (c < grid.length - 1 && grid[r][c + 1] === '1') dfs(grid, r, c + 1);
}

var numIslands = function (grid) {
  let numberOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        numberOfIslands++;
        grid[i][j] = '0';
        const queue = [[i, j]];
        while (queue.length) {
          const [i, j] = queue.shift();

          const neighbors = getNeighbors(i, j, grid);
          for (const [row, col] of neighbors) {
            grid[row][col] = '0';
            queue.push([row, col]);
          }
        }
      }
    }
  }
  return numberOfIslands;
};

function getNeighbors(row, col, grid, seen) {
  const neighbors = [];
  if (row > 0 && grid[row - 1][col] === '1') neighbors.push([row - 1, col]);
  if (row < grid.length - 1 && grid[row + 1][col] === '1')
    neighbors.push([row + 1, col]);
  if (col > 0 && grid[row][col - 1] === '1') neighbors.push([row, col - 1]);
  if (col < grid[0].length - 1 && grid[row][col + 1] === '1')
    neighbors.push([row, col + 1]);
  return neighbors;
}
