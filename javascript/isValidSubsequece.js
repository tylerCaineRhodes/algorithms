function isValidSubsequence(array, sequence) {
  let arrayPointer = 0;
  let sequencePointer = 0;
  while(arrayPointer < array.length) {
    if(sequence[sequencePointer] === array[arrayPointer]) {
      sequencePointer++;
    }
    if(sequencePointer === sequence.length) return true;
    arrayPointer++;
  }
  return false;
}
