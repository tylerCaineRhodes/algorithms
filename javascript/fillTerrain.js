function fillTerrain(array) {
  const largestNum = findLargestNum(array);
  const matrix = new Array(largestNum + 1).fill('').map((val) => new Array(array.length + 2).fill(' '));

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (col === 0) {
          matrix[row][col] = '#';
        } else if (col === matrix[0].length - 1) {
          matrix[row][col] = '#';
        } else if (row >= matrix.length - val && col === i + 1) {
          matrix[row][col] = '#';
        }
      }
    }
  }
  console.log(matrixToString(matrix));
}

function matrixToString(matrix) {
  let resultString = '';
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      resultString += matrix[i][j];
      if (j === matrix[0].length - 1) resultString += '\n';
    }
  }
  return resultString;
}

function findLargestNum(array) {
  let largest = 0;
  for (const num of array) largest = Math.max(largest, num);
  return largest;
}

fillTerrain([5, 4, 2, 1, 8, 3, 4])
