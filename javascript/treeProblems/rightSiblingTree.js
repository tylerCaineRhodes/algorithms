// This is the class of the input root. Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function rightSiblingTree(root) {
  //if is left child node, assign right property to parent.right
  //if is right node, assign right property to parent node's new right child's left child
  mutate(root, null, null);
  return root;
}

function mutate(node, parent, isLeftChild) {
  if (!node) return;
  const { left, right } = node;

  mutate(left, node, true);

  if (!parent) {
    node.right = null;
  } else if (isLeftChild) {
    node.right = parent.right;
  } else {
    if (!parent.right) {
      node.right = null;
    } else {
      node.right = parent.right.left;
    }
  }

  mutate(right, node, false);
}
