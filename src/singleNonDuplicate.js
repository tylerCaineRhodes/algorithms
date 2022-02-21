var singleNonDuplicate = function (nums) {
  //check middle index with two po
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    //if middle doesn't have matching neighbors, return it
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }
    //if mid -1 equals mid, check the length of array from start to mid - 2, and check len from mid + 1 to end
    if (nums[mid] === nums[mid - 1]) {
      // check the length of array from start to mid - 2
      if ((mid - 2 - start + 1) % 2 === 1) {
        end = mid - 2;
        continue;
      }
      //and check len from mid + 1 to end
      if ((end - (mid + 1) + 1) % 2 === 1) {
        start = mid + 1;
        continue;
      }
    }
    //if mid + 1 equals mid,
    if (nums[mid] === nums[mid + 1]) {
      // check the len of array from start to mid - 1
      if ((mid - 1 - start + 1) % 2 === 1) {
        //if it's odd, change end to be mid -1
        end = mid - 1;
        continue;
      }
      //check length of mid + 2 to the end
      if ((end - mid + 2 + 1) % 2 === 1) {
        //set start to mid + 2
        start = mid + 2;
        continue;
      }
    }
  }
  return nums[start];
};
