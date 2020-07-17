
const isValidSquare = (matrix, row, col) => {
  if(!matrix[row] || !matrix[row][col]) return false;
  return true;
}

const isAtEnd = (matrix, row, col) => {
  if(row === matrix.length - 1 && col === matrix[0].length - 1) return true;
  return false;
}

const countPaths = (grid, row, col) => {
  if (!isValidSquare(grid, row, col)) return 0;
  if (isAtEnd(grid, row, col)) return 1;

  return countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1);
};


let test = [
  [1, 1, 0, 1], 
  [1, 0, 1, 1], 
  [1, 1, 1, 1], 
  [0, 1, 1, 1]
];

console.log(countPaths(test, 0, 0))
