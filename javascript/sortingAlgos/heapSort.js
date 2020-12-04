function heapSort(array) {
  buildMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function buildMaxHeap(array) {
  const lastParent = ~~(array.length - 2 / 2);
  for (let i = lastParent; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
}

function siftDown(currentIdx, lastIdx, heap) {
  let leftChildIdx = currentIdx * 2 + 1;

  while (leftChildIdx <= lastIdx) {
    let rightChildIdx = currentIdx * 2 + 2 > lastIdx ? -1 : currentIdx * 2 + 2;
    let toSwap;

    if (rightChildIdx === -1 || heap[leftChildIdx] > heap[rightChildIdx]) {
      toSwap = leftChildIdx;
    } else {
      toSwap = rightChildIdx;
    }
    if (heap[currentIdx] < heap[toSwap]) {
      swap(currentIdx, toSwap, heap);
      currentIdx = toSwap;
      leftChildIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}
