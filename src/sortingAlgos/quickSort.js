function quickSort(array) {
  if (array.length < 2) return array;

  const pivotIdx = 0;
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    const val = array[i];
    if (val < array[pivotIdx]) {
      left.push(val);
    } else {
      right.push(val);
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  const result = left.concat(array[pivotIdx], right);
  return result;
}

function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;

  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      rightIdx -= 1;
    }
  }
  swap(pivotIdx, rightIdx, array);
  const leftSubArrayLen = rightIdx - 1 - startIdx;
  const rightSubArrayLen = endIdx - (rightIdx + 1);
  const leftSubArrayIsSmaller = leftSubArrayLen < rightSubArrayLen;

  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}
