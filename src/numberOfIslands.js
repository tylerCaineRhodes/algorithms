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

var numIslandsII = function (grid) {
  let numberOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') continue;
      numberOfIslands++;
      traverse(i, j, grid);
    }
  }
  return numberOfIslands;
};

function traverse(i, j, grid) {
  grid[i][j] = '0';
  const queue = [[i, j]];
  while (queue.length) {
    const [i, j] = queue.shift();

    const neighbors = getNeighborsII(i, j, grid);
    for (const [row, col] of neighbors) {
      grid[row][col] = '0';
      queue.push([row, col]);
    }
  }
}

function getNeighborsII(row, col, grid) {
  const neighbors = [];
  if (row > 0 && grid[row - 1][col] === '1') neighbors.push([row - 1, col]);
  if (row < grid.length - 1 && grid[row + 1][col] === '1')
    neighbors.push([row + 1, col]);
  if (col > 0 && grid[row][col - 1] === '1') neighbors.push([row, col - 1]);
  if (col < grid[0].length - 1 && grid[row][col + 1] === '1')
    neighbors.push([row, col + 1]);
  return neighbors;
}

var numIslandsIII = function (grid) {
  const seen = grid.map((row) => row.map((val) => false));
  let numberOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') continue;
      if (seen[i][j]) continue;
      numberOfIslands++;
      traverse(i, j, grid, seen);
    }
  }
  return numberOfIslands;
};

function traverse(i, j, grid, seen) {
  seen[i][j] = true;
  const queue = [[i, j]];
  while (queue.length) {
    const [i, j] = queue.shift();

    const neighbors = getNeighborsII(i, j, grid, seen);
    for (const [row, col] of neighbors) {
      seen[row][col] = true;
      queue.push([row, col]);
    }
  }
}

function getNeighborsIII(row, col, grid, seen) {
  const neighbors = [];
  if (row > 0 && grid[row - 1][col] === '1' && !seen[row - 1][col])
    neighbors.push([row - 1, col]);
  if (
    row < grid.length - 1 &&
    grid[row + 1][col] === '1' &&
    !seen[row + 1][col]
  )
    neighbors.push([row + 1, col]);
  if (col > 0 && grid[row][col - 1] === '1' && seen[row][col - 1] === false)
    neighbors.push([row, col - 1]);
  if (
    col < grid[0].length - 1 &&
    grid[row][col + 1] === '1' &&
    !seen[row][col + 1]
  )
    neighbors.push([row, col + 1]);
  return neighbors;
}

var numIslands = function (grid) {
  const seen = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false)
  );
  let islandsCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (seen[r][c]) continue;
      if (grid[r][c] === '0') continue;
      islandsCount++;
      dfs(grid, r, c, seen);
    }
  }
  return islandsCount;
};

function dfs(grid, r, c, memo) {
  if (r < 0 || c < 0) return;
  if (r > grid.length - 1 || c > grid[0].length - 1) return;

  if (grid[r][c] === '0') return;
  if (memo[r][c]) return;

  memo[r][c] = true;
  dfs(grid, r - 1, c, memo);
  dfs(grid, r + 1, c, memo);
  dfs(grid, r, c - 1, memo);
  dfs(grid, r, c + 1, memo);
}
