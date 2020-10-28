function subarraySort(array) {
  //init min and max number that is out of order
  let min = Infinity;
  let max = -Infinity;
  //iterate over the array
  for (let i = 0; i < array.length; i++) {
    //check to see if num is out of order
    if (isOutOfOrder(array, i)) {
      //if it is, find min and max
      min = Math.min(min, array[i]);
      max = Math.max(max, array[i]);
    }
  }
  //if no min or max, return [-1, -1]
  if (min === Infinity) {
    return [-1, -1];
  }
  //set left index to place where in fits
  let leftIndex = 0;
  //place at index of first val that's larger
  while (min >= array[leftIndex]) {
    leftIndex++;
  }
  //set right index to place where max fits
  let rightIndex = array.length - 1;
  //place at index of first val that's smaller
  while (max <= array[rightIndex]) {
    rightIndex--;
  }
  //return left index and right index
  return [leftIndex, rightIndex];
}

function isOutOfOrder(array, i) {
  if (i === 0) return array[i] > array[i + 1];
  if (i === array.length - 1) return array[i] < array[i - 1];
  return array[i] > array[i + 1] || array[i] < array[i - 1];
}
