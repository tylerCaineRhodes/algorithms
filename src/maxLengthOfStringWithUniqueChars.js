function maxLengthI(arr) {
  return dfs(arr, 0, '');
}

function dfs(arr, idx, result) {
  const resultSet = new Set(result.split(''));
  const containsDuplicates = resultSet.size !== result.length;
  if (containsDuplicates) return 0;

  let largest = result.length;
  for (let i = idx; i < arr.length; i++) {
    largest = Math.max(largest, dfs(arr, i + 1, result + arr[i]));
  }

  return largest;
}

function maxLengthII(arr) {
  const validWords = [''];
  let largest = 0;
  for (const word of arr) {
    const validWordsLen = validWords.length;
    for (let i = 0; i < validWordsLen; i++) {
      const newWord = validWords[i] + word;

      if (newWord.length !== new Set(newWord.split('')).size) {
        continue;
      }

      validWords.push(newWord);
      largest = Math.max(largest, newWord.length);
    }
  }
  return largest;
}

function maxLengthIII(arr) {
  return backtrack(arr, 0, new Map());
}

function backtrack(arr, idx, map) {
  for (const count of map.values()) {
    if (count > 1) {
      return 0;
    }
  }

  let largest = map.size;

  for (let i = idx; i < arr.length; i++) {
    const word = arr[i];

    for (const char of word) {
      const charToIncrement = map.get(char) || 0;
      map.set(char, charToIncrement + 1);
      largest = Math.max(largest, backtrack(arr, i + 1, map));
    }

    for (const char of word) {
      if (map.get(char) === 1) {
        map.delete(char);
      } else {
        map.set(char, map.get(char) - 1);
      }
    }
  }
  return largest;
}

console.log(maxLengthI(['un', 'iq', 'ue'])); // output 4
console.log(maxLengthI(['cha', 'r', 'act', 'ers'])); // output 6

console.log(maxLengthII(['un', 'iq', 'ue'])); // output 4
console.log(maxLengthII(['cha', 'r', 'act', 'ers'])); // output 6

console.log(maxLengthIII(['un', 'iq', 'ue'])); // output 4
console.log(maxLengthIII(['cha', 'r', 'act', 'ers'])); // output 6
