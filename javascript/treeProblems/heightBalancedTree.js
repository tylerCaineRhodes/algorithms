function heightBalancedBinaryTree(node) {
  const [isBalanced, height] = getTreeInfo(node)
  return isBalanced;
}

function getTreeInfo(node) {
  if(!node) return [true, 0];
  const [leftIsBalanced, leftHeight] = getTreeInfo(node.left)
  const [rightIsBalanced, rightHeight] = getTreeInfo(node.right)

  const currentHeight = Math.abs(leftHeight = rightHeight) + 1;
  const currIsBalanced = rightIsBalanced && leftIsBalanced && currHeight <= 1

  return [currIsBalanced, currentHeight]
}