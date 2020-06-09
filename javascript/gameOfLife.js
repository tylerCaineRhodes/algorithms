const findNextGen = (matrix) => {
  let rows = new Array(matrix.length)
  let newMatrix = Array.from(rows, () => new Array(matrix[0].length))

  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      if(matrix[row][col] === undefined){
        continue;
      } else if (matrix[row][col] === 0){
        if(countCells(matrix, row, col) >= 3){
          newMatrix[row][col] = 1;
        } else {
          newMatrix[row][col] = 0; 
        }
      } else {
        if(countCells(matrix, row, col) < 3){
          newMatrix[row][col] = 0; 
        } else {
          newMatrix[row][col] = 1;
        }
      }
    }
  }
  return newMatrix;
} 

const countCells = (matrix, i, j) => {
  let count = 0;
  //check left
  if(matrix[i][j - 1] && matrix[i][j - 1] === 1){
    count++;
  }
  //check right
  if(matrix[i][j + 1] && matrix[i][j + 1] === 1){
    count++
  }
  
  if(matrix[i - 1]){
    //check up
    if(matrix[i - 1][j] === 1){
      count++
    }
    //check diagonal upper left
    if(matrix[i - 1][j - 1] && matrix[i - 1][j - 1] === 1){
      count++
    }
    //check diagonal upper right
    if (matrix[i - 1][j + 1] && matrix[i - 1][j + 1] === 1){
      count++
    }
  }
  
  if(matrix[i + 1]){
    //check down
    if(matrix[i + 1][j] === 1){
      count++
    }
    //check diagonal lower right
    if(matrix[i + 1][j + 1] && matrix[i + 1][j + 1] === 1){
      count++
    }
    //check diagonal lower left
    if (matrix[i + 1][j - 1] && matrix[i + 1][j - 1] === 1){
      count++
    }
  }
  return count;
}

let input = [[0,1,0,1], [1,1,0,1], [1,0,0,0]];
let output = [[1,0,1,0], [1,1,1,0], [0,1,0,0]];

console.log(findNextGen(input))
