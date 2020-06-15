class MinHeap {
  constructor(arr) {
    this.heap = arr || [];
  }
  getMin = () => {
    return this.heap[0];
  };

  //switches values in the heap
  swapsies = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  };

  insert = (node) => {
    //push to bottom of heap
    this.heap.push(node);
    if (this.heap.length > 1) {
      //create pointer on inserted index
      let currentIndex = this.heap.length - 1;
      //while pointerindex is greater than 1 and node at current index is greater than node at parent index
      while (currentIndex > 0 && this.heap[~~((currentIndex -1) / 2)] > this.heap[currentIndex]) {
        //swapies
        this.swapsies(currentIndex, ~~((currentIndex - 1) / 2));
        //set the pointer to parent's index
        currentIndex = ~~((currentIndex - 1) / 2);
      }
    }
  };

  getKthSmallest = (k) => {
    if (k > this.heap.length - 1) return null;
    //make immutable
    let copy = new MinHeap(this.heap);
    for (let i = 1; i < k; i++) {
      copy.remove();
    }
    return copy.remove();
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
    //set left & right index to index of current's children
    let [leftIndex, rightIndex] = [currentIndex * 2 + 1, currentIndex * 2 + 2];
    //while both children exist in the array
    while (this.heap[leftIndex] && this.heap[rightIndex] &&
      //and  the current value is greater than either the left or the right
      (this.heap[currentIndex] > this.heap[leftIndex] || this.heap[currentIndex] > this.heap[rightIndex])) {
      //switch which ever is less than and reset the pointer to be that index
      if (this.heap[currentIndex] > this.heap[leftIndex]) {
        this.swapsies(currentIndex, leftIndex);
        currentIndex = leftIndex;

      } else if (this.heap[currentIndex] > this.heap[rightIndex]) {
        this.swapsies(currentIndex, rightIndex);
        currentIndex = rightIndex;
      }
      //set the left and right pointers to point at the new children of current pointer
      [leftIndex, rightIndex] = [currentIndex * 2 + 1, currentIndex * 2 + 2];
    }
    //return smallest var
    return smallest;
  };
}

let test = new MinHeap();
test.insert(5);
test.insert(4);
test.insert(8);
test.insert(1);
test.remove();
test.remove();
test.insert(3);
test.insert(16);

console.log(test.getMin());
console.log(test.heap);
console.log(test.getKthSmallest(3));
