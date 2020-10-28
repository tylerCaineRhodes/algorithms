//if array is empty, return 0
//if array is length 1, return array[0]
//create a copy of the array and initialize as maxSums
//set maxSum[0] to equal array[0]
//set maxSum[1] to equal max of array[0] and array[1]

//iterate over array starting at index 2
//set maxSums[i] equal to the max of maxSums[i - 1] or array[i] + maxSums[i - 2]

//return the last value in maxSums

function maxSubsetSumNoAdjacent(array) {
  //if array is empty, return 0
  if (!array.length) return 0;
  //if array is length 1, return array[0]
  if (array.length === 1) return array[0];
  
  //create a copy of the array and initialize as maxSums
  const maxSums = array.map((val) => 0);
  //set maxSum[0] to equal array[0]
  maxSums[0] = array[0];
  //set maxSum[1] to equal max of array[0] and array[1]
  maxSums[1] = Math.max(array[0], array[1]);
  //iterate over array starting at index 2
  for (let i = 2; i < array.length; i++) {
    let currentNum = array[i];
    //set maxSums[i] equal to the max of maxSums[i - 1] or array[i] + maxSums[i - 2]
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + currentNum);
  }
  //return the last value in maxSums
  return maxSums[maxSums.length - 1];
}
