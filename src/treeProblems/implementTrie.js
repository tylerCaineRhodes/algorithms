/* eslint-disable @typescript-eslint/no-this-alias */
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = false;
  }

  insert = (word) => {
    let node = this;

    for (let letter of word) {
      if (!node.root[letter]) {
        node.root[letter] = new Trie();
      }
      node = node.root[letter];
    }
    node.endOfWord = true;
  };

  search = (word) => {
    let node = this;
    for (let letter of word) {
      if (!node.root[letter]) {
        return false;
      }
      node = node.root[letter];
    }
    return node.endOfWord ? true : false;
  };
  
  startsWith = (word) => {
    let node = this;
    for (let letter of word) {
      if (!node.root[letter]) {
        return false;
      }
      node = node.root[letter];
    }
    return true;
  };
}
