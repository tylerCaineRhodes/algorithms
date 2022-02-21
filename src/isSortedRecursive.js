export const isSorted = (arr) => {
  const len = arr.length;
  if (len === 0 || len === 1) return true;
  
  const lastValGreaterOrEqualToPrev = arr[len - 1] >= arr[len - 2]

  if (lastValGreaterOrEqualToPrev) {
    return isSorted(arr.slice(0, -1));
  } else {
    return false;
  }
};

console.log(
  isSorted([1, 2, 3, 4, 5, 6]),
  isSorted([1, 2, 3, 4, 6, 5]),
  isSorted([10, 1, 2, 3, 4, 6, 5])
);
