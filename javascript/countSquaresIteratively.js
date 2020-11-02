const countSquares = (matrix) => {
  let count = 0;

  for(let r = 0; i < matrix.length; i++) {
    for(let c = 0; c < matrix[0].length; c++) {
      if(matrix[r][c] === 1) {
        findSquares(r, c, matrix, count);
      }
    }
  }
  return count;
}

const findSquares = (row, col, matrix, count) => {
  let offset = 0;
  let isSquare = true;

  while(isSquare) {
    const newRow = row + offset;
    const newCol = col + offset;

    if(!matrix[newRow]) break;

    for(let j = col; j <= newCol; j++) {
      if(!matrix[newRow][j]) {
        isSquare = false;
        break;
      }
    }

    for(let i = row; i <= newRow && isSquare; i++) {
      if(!matrix[i][newCol]) {
        isSquare = false;
        break;
      }
    }

    if(isSquare) {
      count++;
      offset++;
    }
  }
}
