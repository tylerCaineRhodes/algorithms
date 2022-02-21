var majorityElement = function(nums) {
  let maxKey, maxCount = 0;

  const storage = nums.reduce((acc, number) => {
    if(!acc[number]){
      acc[number] = 1;
        return acc;
    } else {
      acc[number]++;
        return acc;
    }
  }, {});

  for(let key in storage){
    if(storage[key] > maxCount){
      maxCount = storage[key];
      maxKey = key; 
    }
  }
  return parseInt(maxKey);
};

export { majorityElement };
