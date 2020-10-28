function waterArea(heights) {
  //init leftmax, rightmax, sum array
  const leftMaxArr = heights.map((val) => 0);
  const rightMaxArr = heights.map((val) => 0);
  const sumArr = heights.map((val) => 0);
  //collect leftMaxHeights by iterating with forloop
  let leftMax = 0;
  for (let i = 0; i < heights.length; i++) {
    let currHeight = heights[i];
    leftMaxArr[i] = leftMax;
    leftMax = Math.max(leftMax, currHeight);
  }
  //collect rightMaxPillars
  let rightMax = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    let currHeight = heights[i];
    rightMaxArr[i] = rightMax;
    rightMax = Math.max(rightMax, currHeight);
  }
  //iterate over each max arr
  for (let i = 0; i < heights.length; i++) {
    //find min height of both max pillars
    let min = Math.min(leftMaxArr[i], rightMaxArr[i]);
    let currHeight = heights[i];
    //if curr height is less than min of both left and right,
    if (currHeight < min) {
      //set to min - curr
      sumArr[i] = min - currHeight;
    } else {
      //set to zero
      sumArr[i] = 0;
    }
  }

  //return sum of final arr

  /* 
  //for trapped rain water solution
  let maxArea = 0;

  for(let i = 0; i < heights.length; i++) {
    if(heights[i] === 0) continue;
    let p = i

    let sum = 0
    while(p < array.length && heights[p] !== 0) {
      sum += heights[p]
      p+=1;
    }
    maxArea = Math.max(sum, maxArea)
  }
  return maxArea
  */
  return sumArr.reduce((acc, val) => acc + val, 0);
}
