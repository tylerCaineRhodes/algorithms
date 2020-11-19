var search = function (nums, target) {
  //get rotated index
  const rotatedIndex = findRotatedIndex(0, nums.length - 1, nums);
  //if nums at rotatedIndes is target, return that
  if (nums[rotatedIndex] === target) return rotatedIndex;
  //if rotated index is 0, array is sorted so just do standard binary search
  if (rotatedIndex === 0) return binarySearch(0, nums.length - 1, nums, target);
  //if target is less than first val, seatch the right side
  if (target < nums[0]) {
    return binarySearch(rotatedIndex, nums.length - 1, nums, target);
    //otherwise, search the left side
  } else {
    return binarySearch(0, rotatedIndex, nums, target);
  }
};

const binarySearch = (left, right, nums, target) => {
  while (left <= right) {
    let mid = ~~((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const findRotatedIndex = (left, right, nums) => {
  //if the far left val is less than last, return 0 as smallest val
  if (nums[left] < nums[right]) return 0;

  while (left <= right) {
    let midpoint = ~~((left + right) / 2);
    //if the current midpoint is greater than next val, next val is pivot idx
    if (nums[midpoint] > nums[midpoint + 1]) {
      return midpoint + 1;
    }
    //if current midpoint is greater than leftmost val
    if (nums[midpoint] >= nums[left]) {
      //search right
      left = midpoint + 1;
    } else {
      //search left
      right = midpoint - 1;
    }
  }
  //if no rotated is found, return 0
  return 0;
};
