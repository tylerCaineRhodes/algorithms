var maxUncrossedLines = function (A, B) {
  let short, long;
  let maxCount = 0;
  if(A.length < B.length){
    [short, long] = [A, B];
  } else {
    [short, long] = [B, A];
  }
  //iterate over shorest arr
  const recurse = (increment) => {
    if(increment > long.length){
      return;
    }
    for(let i = 0; i < short.length; i++){
      let currentCount = 0;
      while(long[i + increment]){
        if(short[i] === long[i + increment]){
          currentCount+=1;
          if(currentCount >= maxCount){
            maxCount = currentCount;
          }
        }
        recurse(increment++);
      }
    }
  }
  recurse(0)
  //for each val, if connected val
  return maxCount;
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4])); //2
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])); //3
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1])); //2