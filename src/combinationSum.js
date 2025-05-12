function combinationSum(arr, target) {
  const storage = new Set();
  const answer = [];

  const backtrackSum = (total, combo) => {
    if (total < 0) return;

    const key = JSON.stringify(combo.slice().sort((a, b) => a - b));
    if (storage.has(key)) return;

    if (total === 0) {
      return storage.add(JSON.stringify(combo.slice().sort((a, b) => a - b)));
    }

    for (let i = 0; i < arr.length; i++) {
      total -= arr[i];
      combo.push(arr[i]);
      backtrackSum(total, combo);
      total += arr[i];
      combo.pop();
    }
  };
  backtrackSum(target, []);
  Array.from(storage).forEach((val) => answer.push(JSON.parse(val)));
  return answer;
}

function combinationSum(arr, target) {
  return backtrack(arr, target, [], [], 0);
}

function backtrack(arr, total, combo, memo, idx) {
  if (total < 0) return;

  if (total === 0) {
    return memo.push(combo.slice());
  }

  for (let i = idx; i < arr.length; i++) {
    combo.push(arr[i]);
    total -= arr[i];
    backtrack(arr, total, combo, memo, i);
    combo.pop();
    total += arr[i];
  }
  return memo;
}

function combinationSum(nums, target) {
  const sums = []

  function backtrack(arr, total, combo, idx) {
    if (total < 0) return;

    if (total === 0) {
      return sums.push(combo.slice());
    }

    for (let i = idx; i < arr.length; i++) {
      combo.push(arr[i]);
      total -= arr[i];
      backtrack(arr, total, combo, i);
      combo.pop();
      total += arr[i];
    }
  }
  backtrack(nums, target, [], 0)
  return sums;
}

function combinationSum(nums, target) {
  const sums = []

  function backtrack(arr, total, combo, idx) {
    if (total < 0) return;

    if (total === 0) {
      return sums.push(combo.slice());
    }

    for (let i = idx; i < arr.length; i++) {
      backtrack(arr, total - arr[i], [...combo, arr[i]], i);
    }
  }

  backtrack(nums, target, [], 0)
  return sums;
}

function combinationSum(nums, target) {
  const sums = []

  function backtrack(total, combo, i) {
    if (total < 0) return;
    if (total === 0) {
      sums.push([...combo]);
      return
    }
    if (i >= nums.length) return;

    backtrack(total - nums[i], [...combo, nums[i]], i); // include curr num and stay
    backtrack( total, combo, i + 1);
  }

  backtrack(target, [], 0)
  return sums;
}

console.log(combinationSum([2, 3, 6, 7], 7));
