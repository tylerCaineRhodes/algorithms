function smallestDifference (arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);

  let indexOne = 0;
  let indexTwo = 0;
  let smallest = Infinity;
  let smallestPair = [];

  while(indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let first = arrayOne[indexOne];
    let second = arrayTwo[indexTwo];
    let curr = Math.abs(first - second);

    if(first < second) {
      indexOne++;
    } else if (second < first) {
      indexTwo++;
    } else {
      return [first, second];
    }
    if(smallest > curr) {
      smallest = curr;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
}