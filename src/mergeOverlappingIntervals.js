function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const merged = [array[0]];

  let curr = merged[0];
  for (let i = 1; i < array.length; i++) {
    const [, currLast] = curr;
    const [nextFirst, nextLast] = array[i];

    if (currLast < nextFirst) {
      merged.push(array[i]);
      curr = merged[merged.length - 1];
    } else {
      curr[1] = Math.max(currLast, nextLast);
    }
  }
  return merged;
}
