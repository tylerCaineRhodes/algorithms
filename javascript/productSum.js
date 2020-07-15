function productSum(array, level = 1) {
  let sum = 0;

  for (let el of array) {
    if (Array.isArray(el)) {
      sum += productSum(el, level + 1);
    } else {
      sum += el;
    }
  }
  return sum * level;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));