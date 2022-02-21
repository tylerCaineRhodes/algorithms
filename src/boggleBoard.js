function boggleBoard(board, words) {
  //initialize found chars to return at the end
  const found = {};
  //create aux matrix to keep track of visited nodes
  const seen = board.map((row) => row.map((val) => false));
  //init new trie
  const trie = new Trie();
  //add words to trie
  for (let word of words) trie.add(word);
  //iterate over the matrix and search each coord
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      search(row, col, board, seen, trie.root, found);
    }
  }
  //return found words
  return Object.keys(found);
}

function search(row, col, board, seen, trieNode, found) {
  //if seen, return
  if (seen[row][col]) return;
  const char = board[row][col];
  //if char not found in trieNode, return
  if (!(char in trieNode)) return;
  //set seen to true
  seen[row][col] = true;
  //set pointer node to trieNode at char
  trieNode = trieNode[char];
  //if it's the end of a word, add to result
  if ('*' in trieNode) {
    found[trieNode['*']] = true;
  }
  //get neighbors of current coord
  const neighbors = getNeighbors(row, col, board);
  for (const neighbor of neighbors) {
    const [row, col] = neighbor;
    //for each neighbor, call search
    search(row, col, board, seen, trieNode, found);
  }
  //backtrack
  seen[row][col] = false;
}

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  add(word) {
    let curr = this.root;
    for (let char of word) {
      if (!(char in curr)) {
        curr[char] = {};
      }
      curr = curr[char];
    }
    curr[this.endSymbol] = word;
  }
}

function getNeighbors(row, col, board) {
  const neighbors = [];
  //top left
  if (row > 0 && col > 0) {
    neighbors.push([row - 1, col - 1]);
  }
  //top
  if (row > 0) {
    neighbors.push([row - 1, col]);
  }
  //top right
  if (row > 0 && col < board[0].length - 1) {
    neighbors.push([row - 1, col + 1]);
  }
  //right
  if (col < board[0].length - 1) {
    neighbors.push([row, col + 1]);
  }
  //bottom right
  if (row < board.length - 1 && col < board[0].length - 1) {
    neighbors.push([row + 1, col + 1]);
  }
  //bottom
  if (row < board.length - 1) {
    neighbors.push([row + 1, col]);
  }
  //bottom left
  if (row < board.length - 1 && col > 0) {
    neighbors.push([row + 1, col - 1]);
  }
  //left
  if (col > 0) {
    neighbors.push([row, col - 1]);
  }
  return neighbors;
}
