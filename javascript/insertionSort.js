function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let siftIndex = i;
    while (
      array[siftIndex - 1] !== undefined && 
      array[siftIndex] < array[siftIndex - 1]
    ) {
      swap(array, siftIndex, siftIndex - 1);
      siftIndex -= 1;
    }
  }
  return array;
}

var swap = function (array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
};

const insertionSort = (array) => {
  const swapsies = (current, previous) => {
    [array[current], array[previous]] = [array[previous], array[current]];
  };

  for (let i = 0; i < array.length; i++) {
    while (array[i] < array[i - 1]) {
      swapsies(i, i - 1);
      i -= 1;
    }
  }
  return array;
};

console.log(insertionSort([5, 1, 2, 3, 4, 7]));
