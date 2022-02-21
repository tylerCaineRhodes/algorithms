function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let p1 = i + 1;
    let p2 = array.length - 1;
    while (p1 < p2) {
      let currentSum = array[i] + array[p1] + array[p2];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[p1], array[p2]]);
        p1++;
        p2--;
      } else if (currentSum > targetSum) {
        p2--;
      } else if (currentSum < targetSum) {
        p1++;
      }
    }
  }
  return triplets;
}

export { threeNumberSum }
