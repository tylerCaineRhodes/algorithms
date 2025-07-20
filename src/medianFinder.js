import { MinPriorityQueue, MaxPriorityQueue } from './dataStructures/heap.js';

class MedianFinder {
  constructor() {
    this.minHeap = new MinPriorityQueue(); // holds larger half
    this.maxHeap = new MaxPriorityQueue(); // holds smaller half
  }

  addNum(num) {
    this.minHeap.enqueue(num);
    this.maxHeap.enqueue(this.minHeap.dequeue());

    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.enqueue(this.maxHeap.dequeue());
    }

    console.log(
      'this.minHeap.toArray(): ',
      this.minHeap.toArray(),
      'this.maxHeap.toArray(): ',
      this.maxHeap.toArray()
    )
  }

  findMedian() {
    if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.front();
    } else {
      return (this.minHeap.front() + this.maxHeap.front()) / 2;
    }
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
