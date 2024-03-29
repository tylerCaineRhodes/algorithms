const invertTree = (root) => {
  if (root === null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

function invertBinaryTree(tree) {
  let queue = [tree];

  while (queue.length) {
    let curr = queue.shift();
    if (!curr) continue;

    [curr.left, curr.right] = [curr.right, curr.left];
    queue.push(curr.left);
    queue.push(curr.right);
  }
  return tree;
}

function invertBinaryTreeI(tree) {
  if (!tree) return;
  [tree.left, tree.right] = [tree.right, tree.left];
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  return tree;
}

export { invertTree };
