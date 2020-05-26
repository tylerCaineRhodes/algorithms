var findMaxLength = function (nums) {
  let maxLen = 0;

  for(let i = 0; i < nums.length; i++){
    let collection = {0: 0, 1: 0}

    for(let j = i; j < nums.length; j++){
      let number = nums[j];
      
      collection[number]++;

      if (collection[0] === collection[1] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
      } 
    }
  } 
  return maxLen;
};


console.log(findMaxLength([0, 1])); //2
console.log(findMaxLength([0, 1, 0])); //2
