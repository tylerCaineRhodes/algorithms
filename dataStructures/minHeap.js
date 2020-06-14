class MinHeap {
  constructor(arr) {
    this.heap = arr || [null];
  }
  getMin = () => {
    return this.heap[1];
  };
  swapsies = (val1, val2) => {
    [this.heap[val1], this.heap[val2]] = [this.heap[val2], this.heap[val1]];
  };
  insert = (node) => {
    this.heap.push(node);
    if (this.heap.length > 1) {
      let currentIndex = this.heap.length - 1;
      while (
        currentIndex > 1 &&
        this.heap[~~(currentIndex / 2)] > this.heap[currentIndex]
      ) {
        [this.heap[currentIndex], this.heap[~~(currentIndex / 2)]] = [
          this.heap[~~(currentIndex / 2)],
          this.heap[currentIndex],
        ];
        currentIndex = ~~(currentIndex / 2);
      }
    }
  };

  getKthSmallest = (k) => {
    if (k > this.heap.length - 1) return null;
    let copy = new MinHeap(this.heap);
    for (let i = 1; i < k; i++) {
      copy.remove();
    }
    return copy.remove();
  };

  remove = () => {
    let len = this.heap.length;

    if (len <= 1) return null;
    if (len === 2) return this.heap.pop();

    let smallest = this.heap[1];

    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let [leftIndex, rightIndex] = [currentIndex * 2, currentIndex * 2 + 1];

    while (
      this.heap[leftIndex] &&
      this.heap[rightIndex] &&
      (this.heap[currentIndex] > this.heap[leftIndex] ||
        this.heap[currentIndex] > this.heap[rightIndex])
    ) {
      if (this.heap[currentIndex] > this.heap[leftIndex]) {
        this.swapsies(currentIndex, leftIndex);
        currentIndex = leftIndex;
      } else if (this.heap[currentIndex] > this.heap[rightIndex]) {
        this.swapsies(currentIndex, rightIndex);
        currentIndex = rightIndex;
      }
      [leftIndex, rightIndex] = [currentIndex * 2, currentIndex * 2 + 1];
    }
    return smallest;
  };
}

let test = new MinHeap();
test.insert(5);
test.insert(4);
test.insert(8);
test.insert(1);
test.remove();
test.insert(3);
test.insert(16);

console.log(test.getMin());
console.log(test.heap);
console.log(test.getKthSmallest(3));
