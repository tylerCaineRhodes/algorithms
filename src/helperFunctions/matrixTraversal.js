const traverseMatrixSudo = (matrix) => {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  for (let i = 0; i < rowLen * colLen; i++) {
    let row = ~~(i / colLen);
    let colIndex = i % colLen;
    console.log(matrix[row][colIndex]);
  }
};

const traverseMatrix = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
      console.log(matrix[row][colIndex]);
    }
  }
};
