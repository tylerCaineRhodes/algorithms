function alienOrder(words) {
  const adj = new Map();

  for (const word of words) {
    for (const char of word) {
      adj.set(char, []);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const [word1, word2] = [words[i], words[i + 1]];
    const minLen = Math.min(word1.length, word2.length);

    if (
      word1.length > word2.length &&
      word1.slice(0, minLen) === word2.slice(0, minLen)
    ) {
      return '';
    }

    for (let j = 0; j < minLen; j++) {
      if (word1[j] !== word2[j]) {
        adj.get(word1[j]).push(word2[j]);
        break;
      }
    }
  }

  const visited = {};
  const visiting = {};
  const result = [];

  for (const [char] of adj) {
    if (!dfs(char)) return '';
  }

  return result.reverse().join('');

  function dfs(char) {
    if (char in visiting) return false;
    if (char in visited) return true;

    visiting[char] = true;

    for (const neighbor of adj.get(char)) {
      if (!dfs(neighbor)) return false;
    }

    delete visiting[char];
    visited[char] = true;
    result.push(char);

    return true;
  }
}

function alienOrder(words) {
  const adj = new Map();

  for (const word of words) {
    for (const char of word) {
      adj.set(char, []);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const [word1, word2] = [words[i], words[i + 1]];
    const minLen = Math.min(word1.length, word2.length);

    if (
      word1.length > word2.length &&
      word1.slice(0, minLen) === word2.slice(0, minLen)
    ) {
      return '';
    }

    for (let j = 0; j < minLen; j++) {
      if (word1[j] !== word2[j]) {
        adj.get(word1[j]).push(word2[j]);
        break;
      }
    }
  }

  const visited = {};
  const visiting = {};
  const result = [];

  for (const [char] of adj) {
    if (!dfs(char)) return '';
  }

  return result.reverse().join('');

  function dfs(char) {
    if (char in visiting) return false;
    if (char in visited) return true;

    visiting[char] = true;

    for (const neighbor of adj.get(char)) {
      if (!dfs(neighbor)) return false;
    }

    delete visiting[char];
    visited[char] = true;
    result.push(char);
  }
}
