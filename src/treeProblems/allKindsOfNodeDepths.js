function allKindsOfNodeDepths(root) {
  let allNodeDepths = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;
    allNodeDepths += countNodeDepths(node);
    queue.push(node.left);
    queue.push(node.right);
  }
  return allNodeDepths;
}

function countNodeDepths(tree, depth = 0) {
  if (!tree) return 0;
  return (
    depth +
    countNodeDepths(tree.left, depth + 1) +
    countNodeDepths(tree.right, depth + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
