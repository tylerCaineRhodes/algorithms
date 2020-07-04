const DF_PREORDER_PRINT = (node) => {
  let seen = [];

  const traverse = (node) => {
    seen.push(node.value);

    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(node);
  return seen;
};

const DF_INORDER_PRINT = (node) => {
  let seen = [];
  
  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    seen.push(node.value);

    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(node);
  return seen;
};

const DF_POSTORDER_PRINT = (node) => {
  let seen = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
    seen.push(node.value);
  };
  traverse(node);
  return seen;
};

class TraversalTree {
  constructor(val) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }

  insert = (val) => {
    if (val < this.val) {
      if (!this.left) {
        this.left = new TraversalTree(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (!this.right) {
        this.right = new TraversalTree(val);
      } else {
        this.right.insert(val);
      }
    }
  };

  preOrder = (cb) => {
    cb(this.val);

    if (this.left) {
      this.left.preOrder(cb);
    }
    if (this.right) {
      this.right.preOrder(cb);
    }
  };

  inOrder = (cb) => {
    if (this.left) {
      this.left.inOrder(cb);
    }
    cb(this.val);
    if (this.right) {
      this.right.inOrder(cb);
    }
  };

  postOrder = (cb) => {
    if (this.left) {
      this.left.postOrder(cb);
    }
    if (this.right) {
      this.right.postOrder(cb);
    }
    cb(this.val);
  };
} 

module.exports = { DF_PREORDER_PRINT, DF_INORDER_PRINT, DF_POSTORDER_PRINT };
