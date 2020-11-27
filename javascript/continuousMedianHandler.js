class ContinuousMedianHandler {
  constructor() {
    this.lowers = new Heap(MAX_HEAP_FUNC, []);
    this.greaters = new Heap(MIN_HEAP_FUNC, []);
    this.median = null;
  }

  insert(number) {
    if (!this.lowers.length || number < this.lowers.peek()) {
      this.lowers.insert(number);
    } else {
      this.greaters.insert(number);
    }
    this.rebalanceHeaps();
    this.updateMedian();
  }

  rebalanceHeaps() {
    if (Math.abs(this.lowers.length - this.greaters.length) <= 1) return;

    if (this.lowers.length > this.greaters.length) {
      this.greaters.insert(this.lowers.remove());
    } else {
      this.lowers.insert(this.greaters.remove());
    }
  }

  updateMedian() {
    if (this.lowers.length === this.greaters.length) {
      this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
    } else if (this.lowers.length > this.greaters.length) {
      this.median = this.lowers.peek();
    } else {
      this.median = this.greaters.peek();
    }
  }

  getMedian() {
    return this.median;
  }
}

class Heap {
  constructor(comparisonFunc, array) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  //iterate through each parent starting with the last, and sift them down into place
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let leftChildIdx = currentIdx * 2 + 1;
    while (leftChildIdx <= endIdx) {
      const rightChildIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (rightChildIdx !== -1) {
        if (this.comparisonFunc(heap[rightChildIdx], heap[leftChildIdx])) {
          idxToSwap = rightChildIdx;
        } else {
          idxToSwap = leftChildIdx;
        }
      } else {
        idxToSwap = leftChildIdx;
      }
      if (this.comparisonFunc(heap[idxToSwap], heap[currentIdx])) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0) {
      if (this.comparisonFunc(heap[currentIdx], heap[parentIdx])) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      } else {
        return;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.length--;
    this.siftDown(0, this.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

function MAX_HEAP_FUNC(a, b) {
  return a > b;
}

function MIN_HEAP_FUNC(a, b) {
  return a < b;
}
