// dynamic programming -- bottom up
function canJump(nums: number[]): boolean {
  let pastPos = nums.length - 1;
  let i = nums.length - 1;

  while (i-- >= 0) {
    const furthestJump = i + nums[i];
    if (furthestJump >= pastPos) {
      pastPos = i;
    }
  }
  return true;
}

// dynamic programming -- bottom up
function canJump__DP(nums: number[]) {
  const memo = new Array(nums.length);
  memo[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    const furthestJump = Math.min(i + nums[i], nums.length - 1);
    for (let j = i + 1; j <= furthestJump; j++) {
      if (memo[j] === 1) {
        memo[i] = 1;
        break;
      }
    }
  }
  return memo[0] === 1;
}

// using backtracking -- not efficient
function canJump__backtracking(nums: number[]): boolean {
  function backtrack(i: number, nums: number[]): boolean {
    if (i > nums.length - 1) return false;

    if (i === nums.length - 1) return true;

    const furthestJump = i + nums[i];
    for (let nextPosition = furthestJump; nextPosition > i; nextPosition--) {
      if (backtrack(nextPosition, nums)) return true;
    }
    return false;
  }
  return backtrack(0, nums);
}

// backtracking with memoization
const canJump__memoized = function (nums: number[]): boolean {
  const memo = new Array(nums.length);
  memo[nums.length - 1] = 1;

  return canJumpFromPosition(0, nums);

  function canJumpFromPosition(i: number, nums: number[]): boolean {
    if (i > nums.length - 1) return false;

    if (memo[i] !== undefined) {
      return memo[i] === 1 ? true : false;
    }

    const furthestJump = i + nums[i];
    for (let nextPosition = furthestJump; nextPosition > i; nextPosition--) {
      if (canJumpFromPosition(nextPosition, nums)) {
        memo[i] = 1;
        return true;
      }
    }

    memo[i] = 0;
    return false;
  }
};
