const allAnagrams = (string) => {
  const anagramStorage = new Set();

  function iterate(resultString, remainderString) {
    if (resultString.length === string.length) {
      anagramStorage.add(resultString);
      return;
    }
    for (let i = 0; i < remainderString.length; i++) {
      iterate(
        resultString + remainderString[i],
        remainderString.slice(0, i) + remainderString.slice(i + 1)
      );
    }
  }
  iterate('', string);

  return [...anagramStorage];
};

function allAnagrams(str) {
  return dfs(str);
}

function dfs(remainder, result = '', collection = []) {
  if (!remainder.length) {
    return collection.push(result);
  }

  for (let i = 0; i < remainder.length; i++) {
    dfs(
      remainder.slice(0, i) + remainder.slice(i + 1),
      result + remainder[i],
      collection
    );
  }
  return collection;
}

console.log(allAnagrams('abc'));
