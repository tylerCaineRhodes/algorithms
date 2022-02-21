class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertStartingAt(string, i);
    }
  }

  insertStartingAt(string, i) {
    let curr = this.root;

    for (let j = i; j < string.length; j++) {
      let letter = string[j];

      if (!curr[letter]) {
        curr[letter] = {};
      }
      curr = curr[letter];
    }
    curr[this.endSymbol] = true;
  }

  contains(string) {
    let curr = this.root;
    for (let letter of string) {
      if (!curr[letter]) {
        return false;
      }
      curr = curr[letter];
    }
    return this.endSymbol in curr;
  }
}
