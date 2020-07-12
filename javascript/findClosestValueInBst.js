function findClosestValueInBst(tree, target) {
	let closest = tree.value;
	
  const mostClose = (tree) => {
    return Math.abs(target - closest) > Math.abs(target - tree.value)
      ? true
      : false;
  };
  const traverse = (tree) => {
    if (tree === null) return;

    if (mostClose(tree)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      traverse(tree.left);
    }
    if (target > tree.value) {
     traverse(tree.right);
    }
  };
  traverse(tree);
	return closest;
};
