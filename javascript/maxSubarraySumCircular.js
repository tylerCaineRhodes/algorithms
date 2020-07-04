var maxSubarraySumCircular = function (A) {
  //get kadanes of arr
  let kadPositive = kadanes(A);
  //create variable which represents sum of entire array
  let circleSum = 0;
  //get array multiplied by -1
  let inverseArr = [];
  //iterate over array and add to circleSum, and push to inverse array
  for(let number of A){
    circleSum += number;
    inverseArr.push(number*= -1)
  }

  //get kadanes of inverse array
  let kadNegative = kadanes(inverseArr);
  //add kadanse of inverse to sum of array and compare that to original kadanes
  circleSum += kadNegative;
  //if - > + && + !== 0, return negative, else return positive
  if(circleSum > kadPositive && circleSum !== 0){
    return circleSum;
  } else {
    return kadPositive;
  }
};

const kadanes = (arr) => {
  let max = -Infinity;
  let currentMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currentMax += arr[i];

    max = Math.max(max, currentMax);
    currentMax = Math.max(0, currentMax);
  }
  return max;
};

console.log(maxSubarraySumCircular([5, -3, 5]));
