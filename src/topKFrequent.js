class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Heap {
  constructor(valueFunction) {
    this.valueFunction = valueFunction;
    this.heap = [];
  }

  enqueue({ key, value }) {
    const node = new Node(key, value);
    this.heap.push(node);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  dequeue() {
    this.swap(0, this.heap.length - 1, this.heap);
    const dequeued = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return dequeued.key;
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
}

function topKFrequent(nums, k) {
  if (k === nums.length) return nums;

  const maxHeap = new Heap(
    (node1, node2, heap) => heap[node1].value > heap[node2].value
  );

  const countDictionary = nums.reduce((acc, num) => {
    acc[num] ? acc[num]++ : (acc[num] = 1);
    return acc;
  }, {});

  for (const key in countDictionary) {
    maxHeap.enqueue({ key, value: countDictionary[key] });
  }

  const topFrequent = [];
  for (let i = 0; i < k; i++) {
    topFrequent.push(maxHeap.dequeue());
  }
  return topFrequent;
}

function topKFrequent(nums, k) {
  if (nums.length <= k) return nums;

  const frequencies = nums.reduce((acc, num) => {
    acc[num] ? acc[num]++ : (acc[num] = 1);
    return acc;
  }, {});
  const buckets = new Array(nums.length + 1).fill().map(() => []);

  for (const num in frequencies) {
    const frequency = frequencies[num];
    buckets[frequency].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    const bucket = buckets[i];
    if (bucket.length) {
      result.push(...bucket);
      if (result.length === k) break;
    }
  }
  return result;
}
