const combinationSum = (arr, target) => {
  const storage = new Set();
  const answer = [];

  const backtrackSum = (total, combo) => {
    if (total < 0) return;

    if (total === 0) {
      return storage.add(JSON.stringify(combo.slice().sort((a,b) => a - b)));
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
};

console.log(combinationSum([2, 3, 6, 7], 7));
