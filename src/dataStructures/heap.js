class Heap {
  constructor(compareFunc, array) {
    this.compareFunc = compareFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  remove() {
    this.swap(0, this.length - 1, this.heap);
    const removed = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
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

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastParent = Math.floor((array.length - 1) / 2);
    for (let i = lastParent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currIdx = 0, lastIdx = this.heap.length - 1, heap = this.heap) {
    let left = currIdx * 2 + 1;

    while (left <= lastIdx) {
      const right = currIdx * 2 + 2 <= lastIdx ? currIdx * 2 + 2 : -1;
      const toSwap = right !== -1 && heap[right] < heap[left] ? right : left;

      if (heap[toSwap] < heap[currIdx]) {
        this.swap(toSwap, currIdx, heap);
        currIdx = toSwap;
        left = currIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currIdx = this.heap.length - 1, heap = this.heap) {
    let parent = Math.floor((currIdx - 1) / 2);

    while (currIdx > 0) {
      if (heap[currIdx] < heap[parent]) {
        this.swap(parent, currIdx, heap);
        currIdx = parent;
        parent = Math.floor((currIdx - 1) / 2);
      } else {
        return;
      }
    }
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp();
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const removed = this.heap.pop();
    this.siftDown();
    return removed;
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}
