function findMin(nums) {
  if (nums.length === 1) return nums[0];

  let p1 = 0;
  let p2 = nums.length - 1;

  if (nums[p1] < nums[p2]) return nums[p1];

  while (p1 <= p2) {
    const mid = Math.floor((p1 + p2) / 2);

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    if (nums[mid] > nums[0]) {
      p1 = mid + 1;
    } else {
      p2 = mid - 1;
    }
  }
}
