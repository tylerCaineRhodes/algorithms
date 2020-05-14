var Trie = function () {
  this.root = {};
  this.isEndOfWord = false;
};

Trie.prototype.insert = function (word) {
  let node = this;

  for (let i = 0; i < word.length; i++) {
    if (!node.root[word[i]]) {
      node.root[word[i]] = new Trie();
    }
    node = node.root[word[i]];
  }
  node.isEndOfWord = true;
};

Trie.prototype.search = function (word) {
  let node = this;
  for (let i = 0; i < word.length; i++) {
    if (!node.root[word[i]]) return false;
    node = node.root[word[i]];
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
