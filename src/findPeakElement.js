var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums.length - 1;
};

var findPeakElement = function (nums) {
  return binarySearch(nums);
};

function binarySearch(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

var findPeakElement = function (nums) {
  return binarySearch(0, nums.length - 1, nums);
};

function binarySearch(l, r, nums) {
  if (l === r) return l;

  const mid = Math.floor((l + r) / 2);

  if (nums[mid] > nums[mid + 1]) {
    return binarySearch(l, mid, nums);
  } else {
    return binarySearch(mid + 1, r, nums);
  }
}
