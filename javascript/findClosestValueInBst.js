function findClosestValueInBst(tree, target) {
  const mostClose = (tree, closest) => {
    return Math.abs(target - closest) > Math.abs(target - tree.value)
      ? true
      : false;
  };
  const traverse = (tree, closest) => {
    if (tree === null) return closest;

    if (mostClose(tree, closest)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      return traverse(tree.left, closest);
    }
    if (target > tree.value) {
      return traverse(tree.right, closest);
    }
    return closest;
  };
  return traverse(tree, tree.value);
};
