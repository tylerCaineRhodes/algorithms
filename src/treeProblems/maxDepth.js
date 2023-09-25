function maxDepth(root) {
  if (!root) return 0;
  let maxDepth = 1;

  const findDepths = (node, depth) => {
    if (!node) return;

    maxDepth = Math.max(maxDepth, depth);

    findDepths(node.left, depth + 1);
    findDepths(node.right, depth + 1);
  };

  findDepths(root, maxDepth);
  return maxDepth;
}

function maxDepthsII(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function maxDepthsIII(root) {
  if (!root) return 0;
  let maxDepth = 1;

  const stack = [[root, maxDepth]];
  while (stack.length) {
    const [node, depth] = stack.pop();
    maxDepth = Math.max(maxDepth, depth);

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }
  return maxDepth;
}
