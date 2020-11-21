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


function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        lowest = array[j];
      }
    }
    array[i] = lowest;
  }
  return array;
}
