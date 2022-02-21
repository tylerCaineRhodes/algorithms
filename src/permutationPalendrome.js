const hasPalendrome = (string) => {
  //create a new set
  let unpaired = new Set();
  //iterate over string
  for (let letter of string) {
    //if letter exists in set, delete from set
    if (unpaired.has(letter)) {
      unpaired.delete(letter);
    } else {
      unpaired.add(letter);
    }
  }
  //else, add to set
  return unpaired.size <= 1;
};

console.log(hasPalendrome('civics'));
