/*

nums = [1, 2, 3, 1] ≈ 4
      0[1, 2, 4, 0]

nums = [2, 7, 9, 3, 1] ≈ 12
      0[2, 7,11, 11,12] ≈ 12

nums = [1]
nums = [1, 2]

edge_case:
 len(nums) <= 2
  return max(nums)

base_case
  dp[0] = 0
  dp[1] = nums[0]

recurrence relation
  dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])

*/
function rob(nums) {
  if (nums.length <= 2) return Math.max(...nums);

  const n = nums.length;

  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 2; i < n + 1; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
  }
  return dp[n];
}

var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n + 1);
  return robFrom(0);

  function robFrom(step) {
    if (step >= n) return 0;
    if (step in dp) return dp[step];

    dp[step] = Math.max(robFrom(step + 1), nums[step] + robFrom(step + 2));
    return dp[step];
  }
};

var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0);

  dp[n] = 0;
  dp[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  return dp[0];
};
