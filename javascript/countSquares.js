let countSquaresWMatrix = (matrix) => {
  let row_len = matrix.length;
  if (row_len === 0) return 0;

  let col_len = matrix[0].length;
  let sum = 0;
  //build new matrix
  let rows = new Array(row_len + 1);
  let answerMatrix = Array.from(rows, () => new Array(col_len + 1).fill(0));

  for (let row = 1; row < row_len + 1; row++) {
    for (let colIndex = 1; colIndex < col_len + 1; colIndex++) {
      if (matrix[row - 1][colIndex - 1] === 1) {
        let lowest =
          Math.min(
            answerMatrix[row - 1][colIndex],
            answerMatrix[row][colIndex - 1],
            answerMatrix[row - 1][colIndex - 1]
          ) + 1;

        answerMatrix[row][colIndex] = lowest;
        sum += answerMatrix[row][colIndex]
      }
    }
  }
  return sum;
};

let Input = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]


console.log(countSquaresWMatrix(Input))
