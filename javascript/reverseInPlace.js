const reverseInPlace = (array) => {
  let endingIndex = array.length - 1, beginningIndex = 0;

  while (endingIndex - beginningIndex >= 1) {
    let saved = array[beginningIndex];
    array[beginningIndex] = array[endingIndex];
    array[endingIndex] = saved;

    beginningIndex += 1;
    endingIndex -= 1;

  };
  return array;
}

console.log(reverseInPlace([1, 2, 3, 4]));
