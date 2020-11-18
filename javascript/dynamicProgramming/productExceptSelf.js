var productExceptSelf = function(nums) {
  const len = nums.length;
  const answer = new Array(len);
  const left = new Array(len);
  const right = new Array(len);
  left[0] = 1;
  right[len - 1] = 1;

  for(let i = 1; i < len; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }

  for(let i = len - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for(let i = 0; i < len; i++) {
    answer[i] = left[i] * right[i]
  }
  return answer;
};

var productExceptSelf_constantSpace = function (nums) {
  const len = nums.length;
  const answer = new Array(len);
  answer[0] = 1;

  for (let i = 1; i < len; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let right = 1;

  for (let i = len - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }
  return answer;
};
