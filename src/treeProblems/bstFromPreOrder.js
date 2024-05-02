var bstFromPreorder = function (preorder) {
  let tree = new TreeNode();

  preorder.forEach((value) => {
    insert(tree, value);
  });
  return tree;
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

const insert = (tree, val) => {
  if (!tree.val) {
    tree.val = val;
    return;
  }
  if (val < tree.val) {
    if (!tree.left) {
      tree.left = new TreeNode(val);
    } else {
      insert(tree.left, val);
    }
  } else {
    if (!tree.right) {
      tree.right = new TreeNode(val);
    } else {
      insert(tree.right, val);
    }
  }
};

const BFS = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let current = collection.shift();
    seen.push(current.val);

    if (current.left) {
      collection.push(current.left);
    }

    if (current.right) {
      collection.push(current.right);
    }
  }
  return seen;
};

const DFS = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let current = collection.shift();
    seen.push(current.val);

    if (current.right) {
      collection.unshift(current.right);
    }

    if (current.left) {
      collection.unshift(current.left);
    }
  }
  return seen;
};
let newTree = bstFromPreorder([8, 5, 1, 7, 10, 12]);
console.log(DFS(newTree));
console.log(BFS(newTree));

var bstFromPreorder = function (arr) {
  class TreeNode {
    constructor(value) {
      this.val = value;
    }
  }
  return createTreeNode(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  function createTreeNode(lower, upper) {
    if (!arr.length) {
      return null;
    }
    if (arr[0] < lower || arr[0] > upper) {
      return null;
    }
    const thisNode = new TreeNode(arr.shift());
    thisNode.left = createTreeNode(lower, thisNode.val);
    thisNode.right = createTreeNode(thisNode.val, upper);
    return thisNode;
  }
};
