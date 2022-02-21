class MinHeap {
  constructor(arr) {
    this.heap = arr || [];
  }

  getMin = () => {
    return this.heap[0];
  };

  swapsies = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  };

  insert = (node) => {
    //push to bottom of heap
    this.heap.push(node);
    if (this.heap.length > 1) {
      //create pointer on inserted index
      let currentIndex = this.heap.length - 1;
      let parentIndex = ~~((currentIndex - 1) / 2);
      //while pointerindex is greater than 1 and node at current index is greater than node at parent index
      while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
        //swapies
        this.swapsies(currentIndex, parentIndex);
        //set the pointer to parent's index
        currentIndex = parentIndex;
        parentIndex = ~~((currentIndex - 1) / 2);
      }
    }
  };

  getKthSmallest = (k) => {
    if (k > this.heap.length - 1) return null;
    let copyArr = this.heap.slice();
    let copyHeap = new MinHeap(copyArr);
    for (let i = 1; i < k; i++) {
      copyHeap.remove();
    }
    return copyHeap.remove();
  };

  remove = () => {
    let len = this.heap.length;
    if (len <= 0) return null;
    if (len === 1) return this.heap.pop();
    //save smallest to return
    let smallest = this.heap[0];
    //set top of tree to the bottom value, in order to bubble down
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    //left index is (currIndex * 2)+ 1
    let leftChildIndex = (currentIndex * 2) + 1;
    //while left child <= last index
    while(leftChildIndex < len) {
      //if rightChild is <= last index, it is (currIndex * 2) + 2, else it's -1
      let rightChildIndex = (currentIndex * 2) + 2 < len ? (currentIndex * 2) + 2 : - 1;
      let indexToSwap;

      if(rightChildIndex !== -1 && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        indexToSwap = rightChildIndex;
      } else {
        indexToSwap = leftChildIndex;
      }
      if(this.heap[currentIndex] < this.heap[indexToSwap]) {
        this.swapsies(currentIndex, indexToSwap);
        currentIndex = indexToSwap;
        leftChildIndex = (currentIndex * 2) + 1;
      } else {
        return smallest;
      }
    }
  };
}


class MinHeapI {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastParent = Math.floor(array.length - 2 / 2);
    for (let i = lastParent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currIdx, endIdx, heap) {
    let left = currIdx * 2 + 1;
    while (left <= endIdx) {
      let right = currIdx * 2 + 2 <= endIdx ? currIdx * 2 + 2 : -1;
      let toSwap;
      if (right !== -1) {
        if (heap[right] < heap[left]) {
          toSwap = right;
        } else {
          toSwap = left;
        }
      } else {
        toSwap = left;
      }
      if (heap[toSwap] < heap[currIdx]) {
        this.swap(currIdx, toSwap, heap);
        currIdx = toSwap;
        left = currIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currIdx, heap) {
    let parent = Math.floor((currIdx - 1) / 2);
    while (currIdx > 0) {
      if (heap[currIdx] < heap[parent]) {
        this.swap(currIdx, parent, heap);
        currIdx = parent;
        parent = Math.floor((currIdx - 1) / 2);
      } else {
        return;
      }
    }
  }
  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const removed = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removed;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}


let test = new MinHeap();
test.insert(5);
test.insert(4);
test.insert(8);
test.insert(1);
test.remove();
test.remove();
test.remove();
test.insert(3);
test.insert(16);
test.insert(57);

console.log(test.getMin());
console.log(test.heap);
console.log(test.getKthSmallest(3));
console.log(test.heap);
