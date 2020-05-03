let input1 = [
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [1,1,1,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
];

let input2 = [
  [-9,-9,-9,1,1,1],
  [0,-9,0,4,3,2],
  [-9,-9,-9,1,2,3],
  [0,0,8,6,6,0],
  [0,0,0,-2,0,0],
  [0,0,1,2,4,0]
];

function hourglassSum(arr) {
  //create highest value variable 
  let highest;
  //iterate over each index in 2d array
  for (let row = 0; row < arr.length; row++) {
    for (let index = 0; index < arr[row].length; index++) {
      let currentSum = 0;
      if ((arr[row][index + 2]) === undefined || (arr[row + 2]) === undefined) {
        break;
      } else {
        //add hour glass pattern to current sum
        let firstRow = arr[row][index] + arr[row][index + 1] + arr[row][index + 2]
        let middleIndex = arr[row + 1][index + 1];
        let lastRow = arr[row + 2][index] + arr[row + 2][index + 1] + arr[row + 2][index + 2];

        currentSum += firstRow + middleIndex + lastRow;
        //compare to highest sum
        if (currentSum > highest || highest === undefined) {
          highest = currentSum
        } else {
          continue;
        }
      }
    }
  }
  return highest;
}

console.log('expecting highest sum to be 7 -->', hourglassSum(input1))
console.log('expecting highest sum to be 28 -->',hourglassSum(input2))