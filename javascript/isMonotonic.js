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

function isMonotonicII(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction, prev, curr) {
  const diff = curr - prev;
  if (direction > 0) {
    return diff < 0;
  }
  return diff > 0;
}

console.log(isMonotonic([1, 2, 0])); //should be false
console.log(isMonotonic([1, 2, -1, -2, -5])); //should be false
console.log(isMonotonic([2, 1])); //should be true
