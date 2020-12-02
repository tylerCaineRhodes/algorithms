function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(array, target, p1, p2, finalRange, goLeft) {
  while (p1 <= p2) {
    let mid = Math.floor((p1 + p2) / 2);

    if (array[mid] < target) {
      p1 = mid + 1;
    } else if (array[mid] > target) {
      p2 = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          p2 = mid - 1;
        }
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          p1 = mid + 1;
        }
      }
    }
  }
}
