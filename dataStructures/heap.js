class Heap {
  constructor(compareFunc, array) {
    this.compareFunc = compareFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.length--;
    this.siftUp(array.length - 1, this.heap);
  }

  remove() {
    this.swap(0, this.length - 1, this.heap);
    const removed = this.heap.pop();
    this.length--;
    this.siftDown(0, array.length - 1, this.heap);
    return removed;
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0) {
      if (this.compareFunc(heap[currentIdx], heap[parentIdx])) {
        this.swap(currentIdx, parentIdx, this.heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      } else {
        return;
      }
    }
  }

  siftDown(currentIdx, endIdx, heap) {
    let leftChildIdx = currentIdx * 2 + 1;
    let idxToSwap;
    while (leftChildIdx <= endIdx) {
      let rightChildIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      if (rightChildIdx !== -1) {
        if (this.compareFunc(heap[rightChildIdx], heap[leftChildIdx])) {
          idxToSwap = rightChildIdx;
        } else {
          idxToSwap = leftChildIdx;
        }
      } else {
        idxToSwap = leftChildIdx;
      }
      if (this.compareFunc(heap[idxToSwap], heap[currentIdx])) {
        this.swap(idxToSwap, currentIdx, this.heap);
        currentIdx = idxToSwap;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  buildHeap(array) {
    const firstParent = Math.floor(array.length - 2 / 2);
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  swap(idxOne, idxTwo, heap) {
    [heap[idxOne], heap[idxTwo]] = [heap[idxTwo], heap[idxOne]];
  }

  peek() {
    return this.heap[0];
  }
}

function MIN_HEAP_FUNC(a, b) {
  return a < b;
}

function MAX_HEAP_FUNC(a, b) {
  return a > b;
}
