function iterativeInOrderTraversal(tree, callback) {
  let previous = null;
  let curr = tree;

  while (curr) {
    let next;
    if (!previous || previous === curr.parent) {
      if (curr.left) {
        next = curr.left;
      } else {
        callback(curr);
        next = curr.right ? curr.right : curr.parent;
      }
    } else if (previous === curr.left) {
      callback(curr);
      next = curr.right ? curr.right : curr.parent;
    } else if (previous === curr.right) {
      next = curr.parent;
    }
    previous = curr;
    curr = next;
  }
}
