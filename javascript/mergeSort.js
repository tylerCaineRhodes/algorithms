//normy solution
const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  };
  let midpointIndex = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, midpointIndex));
  let right = mergeSort(array.slice(midpointIndex));

  let result = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (result.length < left.length + right.length) {
    if (left[leftPointer] < right[rightPointer] || leftPointer < left.length && rightPointer === right.length) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    };
  };
  return result;
};

//with helper function--------------------------------------------------

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  };

  const midpointIndex = Math.floor((array.length / 2));
  let left = array.slice(0, midpointIndex);
  let right = array.slice(midpointIndex);

  return merge(mergeSort(left), mergeSort(right));
};


const merge = (left, right) => {
  let result = [], leftindexPointer = 0, rightindexPointer = 0;

  while (leftindexPointer < left.length && rightindexPointer < right.length) {
    if (left[leftindexPointer] < right[rightindexPointer]) {
      result.push(left[leftindexPointer]);
      leftindexPointer++;
    } else {
      result.push(right[rightindexPointer]);
      rightindexPointer++;
    };
  };
  return result.concat(left.slice(leftindexPointer), right.slice(rightindexPointer))
};

console.log(mergeSort([3,4,1,2,5,6]))