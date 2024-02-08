/*
 https://leetcode.com/problems/meeting-rooms-ii/


  Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

  Example 1:

  Input: intervals = [[0,30],[5,10],[15,20]]
  Output: 2
  Example 2:

  Input: intervals = [[7,10],[2,4]]
  Output: 1
*/

function minMeetingRooms(intervals) {
  const { startTimes, endTimes } = intervals.reduce(
    (acc, [start, end]) => {
      acc.startTimes.push(start);
      acc.endTimes.push(end);
      return acc;
    },
    { startTimes: [], endTimes: [] }
  );

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let roomCount = 0;
  for (let startIdx = 0, endIdx = 0; startIdx < intervals.length; startIdx++) {
    if (startTimes[startIdx] < endTimes[endIdx]) {
      roomCount++;
    } else {
      endIdx++;
    }
  }
  return roomCount;
}

function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (heap.length && heap.peek() <= start) {
      heap.pop();
    }
    heap.push(end);
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  pop() {
    this.swap(0, this.heap.length - 1, this.heap);
    const removed = this.heap.pop();
    this.siftDown(0, this.heap);
    return removed;
  }

  peek() {
    return this.heap[0];
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  siftDown(curr, heap) {
    const lastIdx = heap.length - 1;
    let left = curr * 2 + 1;
    if (left > lastIdx) return;

    const right = curr * 2 + 2 <= lastIdx ? curr * 2 + 2 : -1;
    const toSwap = right !== -1 && heap[right] < heap[left] ? right : left;

    if (heap[toSwap] < heap[curr]) {
      this.swap(toSwap, curr, heap);
      this.siftDown(toSwap, heap);
    }
  }

  siftUp(curr, heap) {
    if (curr === 0) return;

    const parent = Math.floor((curr - 1) / 2);

    if (heap[curr] < heap[parent]) {
      this.swap(curr, parent, heap);
      this.siftUp(parent, heap);
    }
  }

  get length() {
    return this.heap.length;
  }
}
