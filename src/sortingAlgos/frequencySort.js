var frequencySort = function (s) {
  let collection = {};
  let result = '';

  for (const letter of s) {
    if (collection[letter]) {
      collection[letter]++;
    } else {
      collection[letter] = 1;
    }
  }

  const sorted = Object.keys(collection).sort(
    (a, b) => collection[b] - collection[a]
  );

  for (const letter of sorted) {
    let count = 0;
    while (count < collection[letter]) {
      result += letter;
      count++;
    }
  }
  return result;
};

console.log(frequencySort('tree'));
