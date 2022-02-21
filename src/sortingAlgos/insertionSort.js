function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let sift = i;
    while (sift > 0 && array[sift] < array[sift - 1]) {
      swap(array, sift, sift - 1);
      sift -= 1;
    }
  }
  return array;
}

const insertionSortII = (array) => {
  for (let i = 0; i < array.length; i++) {
    while (array[i] < array[i - 1]) {
      swap(i, i - 1);
      i -= 1;
    }
  }
  return array;
};

function swap (array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(insertionSort([5, 1, 2, 3, 4, 7]));
