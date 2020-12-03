function indexEqualsValue(array) {
  let firstIdx = Infinity;
  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 <= p2) {
    let mid = ~~((p1 + p2) / 2);

    if (array[mid] === mid) {
      firstIdx = Math.min(mid, firstIdx);
      p2 = mid - 1;
    } else if (array[mid] < mid) {
      p1 = mid + 1;
    } else {
      p2 = mid - 1;
    }
  }
  return firstIdx === Infinity ? -1 : array[firstIdx];
}
