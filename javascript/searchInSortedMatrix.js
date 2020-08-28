const searchInSortedMatrix = ({ matrix, target }) => {
  let rowPointer = 0;
  let colPointer = matrix[0].length - 1;

  while (rowPointer < matrix.length && colPointer >= 0) {
    if (matrix[rowPointer][colPointer] < target) {
      rowPointer++;
    } else if (matrix[rowPointer][colPointer] > target) {
      colPointer--;
    } else {
      return [rowPointer, colPointer];
    }
  }
  return [-1, -1];
}

module.exports = { searchInSortedMatrix };
