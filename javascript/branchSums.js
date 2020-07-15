function branchSums(root) {
  let sums = [];

  const traverse = (node, currentSum) => {
    if (!node) return;

    currentSum += node.value;

    if (node.left) {
      traverse(node.left, currentSum);
    }
    if (node.right) {
      traverse(node.right, currentSum);
    }

    if (!node.left && !node.right) {
      sums.push(currentSum);
      return;
    }
  };
  traverse(root, 0);
  return sums;
}
