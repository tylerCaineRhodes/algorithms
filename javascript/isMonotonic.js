function isMonotonic(array) {
  // Write your code here.
  let diffType;
  let currDiffType;
  let declared = false;
  for1: for (let i = 0; i < array.length - 1; i++) {
    while1: while (!declared) {
      if (array[i] === array[i + 1]) continue for1;
      if (array[i] < array[i + 1]) {
        diffType = 'pos';
        declared = true;
        break while1;
      } else {
        diffType = 'neg';
        declared = true;
        break while1;
      }
    }
    if (array[i] === array[i + 1]) continue for1;
    if (array[i] < array[i + 1]) {
      currDiffType = 'pos';
    } else {
      currDiffType = 'neg';
    }
    if (currDiffType !== diffType) {
      return false;
    }
  }
  return currDiffType === diffType;
}

console.log(isMonotonic([1, 2, 0])); //should be false
console.log(isMonotonic([1, 2, -1, -2, -5])); //should be false
console.log(isMonotonic([2, 1])); //should be true
