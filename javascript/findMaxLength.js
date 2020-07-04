//brute force
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

//using hashmap
const findMaxLength = (nums) => {
  let max = 0, curr = 0, collection = new Map();
  collection.set(0, -1);

  for(let i = 0; i < nums.length; i++){
    curr += nums[i] === 0 ? -1 : nums[i];

    if(collection.has(curr)){
        max = Math.max(max, i - collection.get(curr));
    } else {
        collection.set(curr, i);
    }
  }
  return max;
}

console.log(
  findMaxLength([0, 1]), 
  findMaxLength([0, 1, 0])
); 
