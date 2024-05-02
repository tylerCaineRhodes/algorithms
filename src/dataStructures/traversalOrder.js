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
    this.value = val || null;
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

const DF_PREORDER_PRINT_SD = (node, seen = []) => {
  seen.push(node.value);

  if (node.left) {
    DF_PREORDER_PRINT_SD(node.left, seen);
  }
  if (node.right) {
    DF_PREORDER_PRINT_SD(node.right, seen);
  }
  return seen;
};

const DF_INORDER_PRINT_SD = (node, seen = []) => {
  if (node.left) {
    DF_INORDER_PRINT_SD(node.left, seen);
  }
  seen.push(node.value);

  if (node.right) {
    DF_INORDER_PRINT_SD(node.right, seen);
  }
  return seen;
};

const DF_POSTORDER_PRINT_SD = (node, seen = []) => {
  if (node.left) {
    DF_POSTORDER_PRINT_SD(node.left, seen);
  }
  if (node.right) {
    DF_POSTORDER_PRINT_SD(node.right, seen);
  }
  seen.push(node.value);
  return seen;
};

function preOrderTraversalIterative(root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.value);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}

function inOrderTraversalIterative(tree) {
  const stack = [];
  const result = [];
  let curr = tree;
  while (curr || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
      continue;
    }
    curr = stack.pop();
    result.push(curr.value);
    curr = curr.right;
  }
  return result;
}

function postOrderTraversalIterative(root) {
  const stack1 = [root];
  const stack2 = [];
  const result = [];

  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node);

    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right);
    }
  }

  while (stack2.length) {
    result.push(stack2.pop().value);
  }
  return result;
}

export {
  DF_PREORDER_PRINT,
  DF_INORDER_PRINT,
  DF_POSTORDER_PRINT,
  DF_PREORDER_PRINT_SD,
  DF_INORDER_PRINT_SD,
  DF_POSTORDER_PRINT_SD,
};
