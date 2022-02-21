function quickselect(array, k) {
  const position = k - 1;
  return quickSelectHelper(array, 0, array.length - 1, position);
}

function quickSelectHelper(array, startIdx, endIdx, position) {
  while (startIdx <= endIdx) {
    let pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while (leftIdx <= rightIdx) {
      if (
        array[leftIdx] > array[pivotIdx] &&
        array[rightIdx] < array[pivotIdx]
      ) {
        swap(leftIdx, rightIdx, array);
      }
      if (array[leftIdx] < array[pivotIdx]) {
        leftIdx++;
      }
      if (array[rightIdx] > array[pivotIdx]) {
        rightIdx--;
      }
    }
    swap(pivotIdx, rightIdx, array);
    if (rightIdx === position) {
      return array[rightIdx];
    } else if (rightIdx < position) {
      startIdx = rightIdx + 1;
    } else {
      endIdx = rightIdx - 1;
    }
  }
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}
