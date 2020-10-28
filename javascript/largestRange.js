function largestRange(array) {
  let longestRange = [];
  //create longest length result
  let longestLen = 0;
  //create hash table and map each val to true
  const nums = {};
  //iterate again and create
  for (let num of array) {
    nums[num] = true;
  }
  for (let num of array) {
    if (!nums[num]) continue;

    nums[num] = false;
    let currLen = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currLen += 1;
      left -= 1;
    }
    while (right in nums) {
      nums[right] = false;
      currLen += 1;
      right += 1;
    }
    if (currLen > longestLen) {
      longestLen = currLen;
      longestRange = [left + 1, right - 1];
    }
  }
  return longestRange;
}
