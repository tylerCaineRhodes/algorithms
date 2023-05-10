function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  const merged = [];

  let leftPointer = 0,
    rightPointer = 0;

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      merged.push(left[leftPointer]);
      leftPointer++;
    } else {
      merged.push(right[rightPointer]);
      rightPointer++;
    }
  }

  while (leftPointer < left.length) {
    merged.push(left[leftPointer]);
    leftPointer++;
  }

  while (rightPointer < right.length) {
    merged.push(right[rightPointer]);
    rightPointer++;
  }

  return merged;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  const merged = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (merged.length < left.length + right.length) {
    if (
      left[leftPointer] < right[rightPointer] ||
      rightPointer === right.length
    ) {
      merged.push(left[leftPointer]);
      leftPointer++;
    } else {
      merged.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return merged;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  const merged = [];

  let leftPointer = 0,
    rightPointer = 0;

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      merged.push(left[leftPointer]);
      leftPointer++;
    } else {
      merged.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return merged.concat(left.slice(leftPointer), right.slice(rightPointer));
}

//with helper function--------------------------------------------------

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let leftPointer = 0,
    rightPointer = 0;

  while (merged.length < left.length + right.length) {
    if (
      left[leftPointer] < right[rightPointer] ||
      (leftPointer < left.length && rightPointer === right.length)
    ) {
      merged.push(left[leftPointer]);
      leftPointer++;
    } else {
      merged.push(right[rightPointer]);
      rightPointer++;
    }
  }

  return merged;
}

console.log(mergeSort([3, 4, 1, 2, 5, 6]));
console.log(mergeSort([5, 2, 1, 15, 2]));
console.log(mergeSort([5, 2, 1, 15]));
console.log(mergeSort([1, 2, 4, 3, 3, 3, 0]));
console.log(mergeSort([]));
