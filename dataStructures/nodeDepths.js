function nodeDepths(root) {
  let depthSum = 0;

  const countDepths = (node, depth) => {
    if (!node) return;

    depthSum += depth;

    if (node.left) {
      countDepths(node.left, depth + 1);
    }
    if (node.right) {
      countDepths(node.right, depth + 1);
    }
  };
  countDepths(root, 0);
  return depthSum;
}
