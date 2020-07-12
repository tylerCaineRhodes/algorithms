function validateBst(tree) {
  const traverseTree = (tree, min, max) => {
    if (!tree) return true;
    if (tree.value < min || tree.value >= max) return false;
    
    const leftIsValid = traverseTree(tree.left, min, tree.value);
    const rightIsValid = traverseTree(tree.right, tree.value, max);

    return leftIsValid && rightIsValid;
  };
  return traverseTree(tree, -Infinity, Infinity);
}
