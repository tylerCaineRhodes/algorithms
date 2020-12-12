class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function flattenBinaryTree(root) {
  const nodesInOrder = getNodesInOrder(root, []);
  for (let i = 0; i < nodesInOrder.length - 1; i++) {
    const leftNode = nodesInOrder[i];
    const rightNode = nodesInOrder[i + 1];
    leftNode.right = rightNode;
    rightNode.left = leftNode;
  }
  return nodesInOrder[0];
}

function getNodesInOrder(tree, array) {
  if (!tree) return;
  getNodesInOrder(tree.left, array);
  array.push(tree);
  getNodesInOrder(tree.right, array);
  return array;
}
