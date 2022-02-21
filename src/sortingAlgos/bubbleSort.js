const bubbleSort = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      count++;
    }
  }

  if (count === 0) {
    return arr;
  } else {
    return bubbleSort(arr);
  }
};

console.log(bubbleSort([2, 5, 4, 3, 6, 1]));
