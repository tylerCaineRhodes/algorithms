function selectionSort(array) {
  let curr = 0;
  while (curr < array.length - 1) {
    let smallest = curr;
    for (let i = curr + 1; i < array.length; i++) {
      if (array[smallest] > array[i]) {
        smallest = i;
      }
    }
    swap(array, curr, smallest);
    curr++;
  }
  
  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
