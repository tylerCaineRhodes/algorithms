const findSubsets = (nums) => {
  const subsets = [[]]
  for (let i = 0; i < nums.length; i++) {
    const len = subsets.length;
    for (let j = 0; j < len; j++) {
      subsets.push([...subsets[j], nums[i]])
    }
  }
  return subsets;
}

const findSubsets2 = (nums) => {
  subsets = [];

  const dfs = (i, subset) => {
    if (i === nums.length) return subsets.push(subset)

    dfs(i + 1, [...subset, nums[i]])
    dfs(i + 1, [...subset])
  }
  dfs(0, [])

  return subsets;
}

const findSubsets3 = (nums) => {
  const dfs = (i, subset) => {
    if (i === nums.length) return [subset];

    const conditionASubsets = dfs(i + 1, [...subset, nums[i]]);
    const conditionBSubsets = dfs(i + 1, subset);
    return [...conditionASubsets, ...conditionBSubsets];
  }
  return dfs(0, [])
}

const subsetsWithDuplicates = (nums) => {
  const subsets = [[]];
  const memo = {};

  for (let i = 0; i < nums.length; i++) {
    const len = subsets.length;

    for (let j = 0; j < len; j++) {
      const subset = [...subsets[j], nums[i]]
      const key = subset.sort().join();
      if (key in memo) continue;
      memo[key] = true;
      subsets.push(subset)
    }
  }

  return subsets
}

// if the current is a dup from the prev, only copy subsets created from the previous step
const subsetsWithDuplicates2 = (nums) => {
  nums.sort((a, b) => a - b)
  const subsets = [[]];
  let [windowStart, windowEnd] = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      windowStart = windowEnd + 1;
    }

    windowEnd = subsets.length - 1;
    for (let j = windowStart; j < windowEnd; j++) {
      const subset = [...subsets[j]];
      subsets.push(subset);
    }
  }
  return subsets;
}
