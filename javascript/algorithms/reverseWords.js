const reverseWordsNormieVersion = (words) => {
  //create a first and last pointer 
  let firstPointer = 0, lastPointer = 0;
  //turn into array of words
  words = words.split(' ');
  words = words.join('');
  //for each word in array, swpa the fist and last in the array
  while (firstPointer < lastPointer) {
    let frontVal = words[firstPointer];
    words[firstPointer] = words[lastPointer];
    words[lastPointer] = frontVal;
    firstPointer += 1;
    lastPointer -= 1;
  }
  //join on space and return
  return words.join(' ');
}
