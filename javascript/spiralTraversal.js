const spiralTraversal = (arr) => {
  let result = [];
  let minRow = 0, maxRow = arr.length - 1, minCol = 0; maxCol = arr[0].length - 1;
  console.log(maxCol)

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

console.log(spiralTraversal([[1,2,3], [4,5,6], [7,8,9]]))