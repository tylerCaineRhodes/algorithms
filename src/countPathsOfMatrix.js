function countPaths(grid, r, c) {
  if (!isValidSquare(grid, r, c)) return 0;
  if (isAtEnd(grid, r, c)) return 1;
  return countPaths(grid, r + 1, c) + countPaths(grid, r, c + 1);
}

function isValidSquare(grid, r, c) {
  return r < grid.length && c < grid[0].length;
}

function isAtEnd(grid, r, c) {
  return r === grid.length - 1 && c === grid[0].length - 1;
}

function countPathsMemoized(grid, r, c, memo) {
  if (!isValidSquare(grid, r, c)) return 0;

  if (isAtEnd(grid, r, c)) {
    memo[r][c] = 1;
    return memo[r][c];
  }
  if (memo[r][c]) return memo[r][c];

  memo[r][c] =
    countPathsMemoized(grid, r + 1, c, memo) +
    countPathsMemoized(grid, r, c + 1, memo);
  return memo[r][c];
}

const test = [
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];

const memo = new Array(test.length)
  .fill()
  .map(() => new Array(test[0].length).fill(0));

console.log(countPaths(test, 0, 0));
console.log(countPathsMemoized(test, 0, 0, memo));
