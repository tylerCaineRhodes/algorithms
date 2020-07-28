function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  let first = array[0];
  let second = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    let curr = Math.max(second, first + array[i]);
    first = second;
    second = curr;
  }
  return second;
}
