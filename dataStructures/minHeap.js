class MinHeap {
  constructor(arr) {
    this.heap = arr || [];
  };

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
