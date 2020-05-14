var Trie = function () {
  this.root = {};
  this.isEndOfWord = false;
};

Trie.prototype.insert = function (word) {
  let node = this;

  for (let letter of word) {
    if (!node.root[letter]) {
      node.root[letter] = new Trie();
    }
    node = node.root[letter];
  }
  node.isEndOfWord = true;
};

Trie.prototype.search = function (word) {
  let node = this;
  for (let letter of word) {
    if (!node.root[letter]) return false;
    node = node.root[letter];
  }
  return node.isEndOfWord ? true : false;
};

Trie.prototype.startsWith = function (prefix) {
  let node = this;

  for (let letter of prefix) {
    if (!node.root[letter]) {
      return false;
    }
    node = node.root[letter];
  }
  return true;
};
