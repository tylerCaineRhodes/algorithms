const allAnagrams = (string) => {
  let iterate;
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

function RPS(string) {
  const result = [];

  function iterate(currentPermutation) {
    if (currentPermutation.length === string.length) {
      result.push(currentPermutation);
      return;
    }

    for (let i = 0; i < string.length; i++) {
      iterate(currentPermutation + string[i]);
    }
  }
  iterate('');
  return result;

}
console.log(RPS('abc'));
console.log(allAnagrams('abc'));
