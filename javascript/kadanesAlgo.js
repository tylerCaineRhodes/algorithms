const kadanes = (arr) => {
  let max = 0; 
  let currentMax = 0;
  let maxSubArr = [0,0];

  for(let i =0; i < arr.length; i++){
    currentMax += arr[i];
    
    if(currentMax > max){
      max = currentMax;
      maxSubArr[1] = i;
    } 

    if(currentMax < 0){
      currentMax = 0;
      maxSubArr[0] = i + 1
    }
  }
  return arr.slice(maxSubArr[0], maxSubArr[1] + 1)
}


console.log(kadanes([-2,-3,4,-1,-2,1,5,-3])) //7
console.log(kadanes([1, -2, 3, -2])); //3
