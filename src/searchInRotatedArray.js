var search = function (nums, target) {
  const rotatedIndex = findRotatedIndex(0, nums.length - 1, nums);
  if (nums[rotatedIndex] === target) return rotatedIndex;
  if (rotatedIndex === 0) return binarySearch(0, nums.length - 1, nums, target);

  if (target < nums[0]) {
    return binarySearch(rotatedIndex, nums.length - 1, nums, target);
  } else {
    return binarySearch(0, rotatedIndex, nums, target);
  }
};

const binarySearch = (left, right, nums, target) => {
  while (left <= right) {
    const mid = ~~((left + right) / 2);
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
  if (nums[left] < nums[right]) return 0;

  while (left <= right) {
    const mid = ~~((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
};
