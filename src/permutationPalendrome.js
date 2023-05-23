function hasPalendrome(string) {
  string = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const unpaired = new Set();

  for (const letter of string) {
    if (unpaired.has(letter)) {
      unpaired.delete(letter);
    } else {
      unpaired.add(letter);
    }
  }
  console.log(unpaired);
  return unpaired.size <= 1;
}

console.log(hasPalendrome('civics')); // false
console.log(hasPalendrome('civic')); // true
console.log(hasPalendrome('Tact Coa')); // true
