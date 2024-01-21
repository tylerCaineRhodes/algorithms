class Heap {
  constructor(valueFunction) {
    this.valueFunction = valueFunction;
    this.heap = [];
  }

  enqueue(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  dequeue() {
    this.swap(0, this.heap.length - 1, this.heap);
    const dequeued = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return dequeued;
  }

  siftUp(currIdx, heap) {
    let parent = Math.floor((currIdx - 1) / 2);

    while (currIdx > 0) {
      if (this.valueFunction(currIdx, parent, heap)) {
        this.swap(currIdx, parent, heap);
        currIdx = parent;
        parent = Math.floor((currIdx - 1) / 2);
      } else {
        return;
      }
    }
  }

  siftDown(curr, lastIdx, heap) {
    let left = curr * 2 + 1;

    while (left <= lastIdx) {
      const right = curr * 2 + 2 <= lastIdx ? curr * 2 + 2 : -1;
      const toSwap =
        right !== -1 && this.valueFunction(right, left, heap) ? right : left;

      if (this.valueFunction(toSwap, curr, heap)) {
        this.swap(curr, toSwap, heap);
        curr = toSwap;
        left = curr * 2 + 1;
      } else {
        return;
      }
    }
  }
  swap(node1, node2, heap) {
    const tmp = heap[node1];
    heap[node1] = heap[node2];
    heap[node2] = tmp;
  }

  length() {
    this.heap.length;
  }
}

var findKthLargest = function (nums, k) {
  const maxHeap = new Heap((node1, node2, heap) => heap[node1] > heap[node2]);
  nums.forEach((num) => maxHeap.enqueue(num));

  for (let i = 1; i < k; i++) {
    maxHeap.dequeue();
  }
  return maxHeap.dequeue();
};
