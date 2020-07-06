const DF_PREORDER_PRINT = (node) => {
  let seen = [];

  const traverse = (node) => {
    seen.push(node.value);

    if (node.left) {
      traverse(node.left);
    };
    if (node.right) {
      traverse(node.right);
    };
  };
  traverse(node);
  return seen;
};

const DF_INORDER_PRINT = (node) => {
  let seen = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    };
    seen.push(node.value);

    if (node.right) {
      traverse(node.right);
    };
  };
  traverse(node);
  return seen;
};

const DF_POSTORDER_PRINT = (node) => {
  let seen = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    };
    if (node.right) {
      traverse(node.right);
    };
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
  };

  insert = (val) => {
    if (val < this.val) {
      if (!this.left) {
        this.left = new TraversalTree(val);
      } else {
        this.left.insert(val);
      };
    } else {
      if (!this.right) {
        this.right = new TraversalTree(val);
      } else {
        this.right.insert(val);
      };
    };
  };

  preOrder = (cb) => {
    cb(this.val);

    if (this.left) {
      this.left.preOrder(cb);
    };
    if (this.right) {
      this.right.preOrder(cb);
    };
  };

  inOrder = (cb) => {
    if (this.left) {
      this.left.inOrder(cb);
    };
    cb(this.val);
    if (this.right) {
      this.right.inOrder(cb);
    };
  };

  postOrder = (cb) => {
    if (this.left) {
      this.left.postOrder(cb);
    };
    if (this.right) {
      this.right.postOrder(cb);
    };
    cb(this.val);
  };
};

const DF_PREORDER_PRINT_SD = (node, seen = []) => {
  seen.push(node.value);

  if (node.left) {
    seen = seen.concat(DF_PREORDER_PRINT_SD(node.left));
  };
  if (node.right) {
    seen = seen.concat(DF_PREORDER_PRINT_SD(node.right));
  };
  return seen;
};

const DF_INORDER_PRINT_SD = (node, seen = []) => {
  if (node.left) {
    seen = seen.concat(DF_INORDER_PRINT_SD(node.left));
  };
  seen.push(node.value);

  if (node.right) {
    seen = seen.concat(DF_INORDER_PRINT_SD(node.right));
  };
  return seen;
};

const DF_POSTORDER_PRINT_SD = (node, seen = []) => {
  if (node.left) {
    seen = seen.concat(DF_POSTORDER_PRINT_SD(node.left));
  };
  if (node.right) {
    seen = seen.concat(DF_POSTORDER_PRINT_SD(node.right));
  };
  seen.push(node.value);
  return seen;
};

module.exports = { 
  DF_PREORDER_PRINT, 
  DF_INORDER_PRINT, DF_POSTORDER_PRINT, 
  DF_PREORDER_PRINT_SD, 
  DF_INORDER_PRINT_SD, 
  DF_POSTORDER_PRINT_SD 
};
