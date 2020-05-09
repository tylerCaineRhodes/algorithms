class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
}

const bfsInsertion = (node, val) => {
  let collection = [node];

  while (collection.length) {
    let node = collection.shift();

    if (!node.value) { //issue is here
      node.value = val;
      node.left = new Node();
      node.right = new Node();
      break;
    }
    let children = [node.left, node.right];
    collection.push(...children);
  }
};

const BFS_Print = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let node = collection.shift();
    seen.push(node.value);

    if (node.left) {
      collection.push(node.left);
    }
    if (node.right) {
      collection.push(node.right);
    }
  }
  return seen;
};

const DFS_Print = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let node = collection.shift();
    seen.push(node.value);

    if (node.right) {
      collection.unshift(node.right);
    }
    if (node.left) {
      collection.unshift(node.left);
    }
  }
  return seen;
};

const normalDF_Print = (node) => {
  let seen = [];

  const traverse = (node) => {
    seen.push(node.value)
    
    if(node.left){
      traverse(node.left)
    }
    if(node.right){
      traverse(node.right)
    }
  }
  traverse(node);

  return seen;
}

const createBinaryTreeFromArray = (node, arr) => {
  arr.forEach((val) => {
    bfsInsertion(node, val);
  });
  return node;
};

module.exports = { Node, bfsInsertion, BFS_Print, DFS_Print, createBinaryTreeFromArray, normalDF_Print };
