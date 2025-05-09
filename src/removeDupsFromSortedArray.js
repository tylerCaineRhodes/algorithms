/*

Move all the unique number instances at the beginning of the array and after
moving return the length of the subarray that has no duplicate in it.

  Examples:

  Input: [2, 3, 3, 3, 6, 9, 9]
  Output: 4
  Explanation: The first four elements after moving element will be [2, 3, 6, 9].

  Input: [2, 2, 2, 11]
  Output: 2
  Explanation: The first two elements after moving elements will be [2, 11].

  https://leetcode.com/problems/remove-duplicates-from-sorted-array/

*/

// two pointers
function removeDuplicates(nums) {
  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    if (nums[p1] === nums[p2]) {
      p2++;
    } else {
      p1++;
      nums[p1] = nums[p2];
    }
  }
  return p1 + 1;
}

// sliding window
function removeDuplicatesII(nums) {
  let start = 0;

  for (let end = 1; end < nums.length; end++) {
    while (nums[start] !== nums[end]) {
      start++
      nums[start] = nums[end];
    }
  }
  return start + 1;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])) // 4
console.log(removeDuplicates([2, 2, 2, 11])) // 2
