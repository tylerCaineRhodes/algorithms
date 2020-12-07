function multiStringSearch(bigString, smallStrings) {
  return smallStrings.map((string) => isInBigString(bigString, string));
}

function isInBigString(bigString, smallString) {
  for (let i = 0; i < bigString.length; i++) {
    if (i + smallString.length > bigString.length) break;
    if (isInBigStringHelper(bigString, smallString, i)) return true;
  }
  return false;
}

function isInBigStringHelper(bigString, smallString, startIdx) {
  let leftBigIdx = startIdx;
  let rightBigIdx = startIdx + smallString.length - 1;
  let leftSmallIdx = 0;
  let rightSmallIdx = smallString.length - 1;

  while (leftBigIdx <= rightBigIdx) {
    if (
      bigString[leftBigIdx] !== smallString[leftSmallIdx] ||
      bigString[rightBigIdx] !== smallString[rightSmallIdx]
    ) {
      return false;
    }
    leftBigIdx++;
    rightBigIdx--;
    leftSmallIdx++;
    rightSmallIdx--;
  }
  return true;
}

function multiStringSearch(bigString, smallStrings) {
  const modifiedSuffixTrie = new ModifiedSuffixTrie(bigString);
  return smallStrings.map((string) => modifiedSuffixTrie.contains(string));
}

class ModifiedSuffixTrie {
  constructor(string) {
    this.root = {};
    this.populateSuffixTrie(string);
  }

  populateSuffixTrie(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
  }

  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}

function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (let string of smallStrings) {
    trie.insert(string);
  }
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
}

function findSmallStringsIn(string, startIdx, trie, containedStrings) {
  let currentNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currentChar = string[i];
    if (!(currentChar in currentNode)) break;
    currentNode = currentNode[currentChar];
    if (trie.endSymbol in currentNode)
      containedStrings[currentNode[trie.endSymbol]] = true;
  }
}

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (!(letter in current)) current[letter] = {};
      current = current[letter];
    }
    current[this.endSymbol] = string;
  }
}
