function subarraySort(array) {
  let minOOO = Infinity;
  let maxOOO = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isNotOrdered(array, i, num)) {
      minOOO = Math.min(minOOO, num);
      maxOOO = Math.max(maxOOO, num);
    }
  }
  if (minOOO === Infinity) {
    return [-1, -1];
  }
  let leftSubIndex = 0;
  let rightSubIndex = array.length - 1;

  while (minOOO >= array[leftSubIndex]) {
    leftSubIndex++;
  }
  while (maxOOO <= array[rightSubIndex]) {
    rightSubIndex--;
  }
  return [leftSubIndex, rightSubIndex];
}

function isNotOrdered(array, i, num) {
  if (i === 0) {
    return num > array[i + 1];
  }
  if (i === array.length - 1) {
    return num < array[i - 1];
  }
  return num < array[i - 1] || num > array[i + 1];
}
