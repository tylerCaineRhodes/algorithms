const spiralTraversal = (arr) => {
  let result = [];
  let minRow = 0, maxRow = arr.length - 1, minCol = 0, maxCol = arr[0].length - 1;

  while(minRow <= maxRow && minCol <= maxCol){
    for(let i = minCol; i <= maxCol; i++){
      result.push(arr[minRow][i]);
    }
    minRow++;
    for(let j = minRow; j <= maxRow; j++){
      result.push(arr[j][maxCol]);
    }
    maxCol--;

    for(let k = maxCol; k >= minCol; k--){
      result.push(arr[maxRow][k]);
    }
    maxRow--;
    
    for(let l = maxRow; l >= minRow; l--){
      result.push(arr[l][minCol])
    }
    minCol++;
  }
  return result
}

function spiralTraversalII(array) {
  let minCol = 0,
    maxCol = array[0].length - 1;
  let minRow = 0,
    maxRow = array.length - 1;
  let result = [];

  while (minRow <= maxRow && minCol <= maxCol) {
    for (let i = minCol; i <= maxCol; i++) {
      result.push(array[minRow][i]);
    }

    for (let i = minRow + 1; i <= maxRow; i++) {
      result.push(array[i][maxCol]);
    }

    for (let i = maxCol - 1; i >= minCol; i--) {
      if (minRow === maxRow) break;
      result.push(array[maxRow][i]);
    }

    for (let i = maxRow - 1; i > minRow; i--) {
      if (minCol === maxCol) break;
      result.push(array[i][minCol]);
    }

    minCol++;
    minRow++;
    maxCol--;
    maxRow--;
  }
  return result;
}

console.log(spiralTraversal([[1,2,3], [4,5,6], [7,8,9]]))
