const allAnagrams = (string) => {
  const anagramStorage = new Set(), anagrams = [];

  (iterate = (resultString, remainderString) => {
    if (resultString.length === string.length) {
      anagramStorage.add(resultString);
      return;
    }
    for (let i = 0; i < remainderString.length; i++) {
      iterate(resultString + remainderString[i], remainderString.slice(0, i) + remainderString.slice(i + 1));
    }
  })('', string);
  
  anagramStorage.forEach(val => anagrams.push(val));
  return anagrams;
};

console.log(allAnagrams('abc'));
