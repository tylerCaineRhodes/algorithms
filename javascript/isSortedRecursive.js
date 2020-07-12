const isSorted = (arr) => {
  let len = arr.length;
  if (arr.length === 0 || arr.length === 1) return true;

  if (arr[len - 1] >= arr[len - 2]) {
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

module.exports = { isSorted };
