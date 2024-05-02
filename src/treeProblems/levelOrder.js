/*
    base case
    if len(levels) == idx -> initialize new level
  */
function levelOrder(root) {
  const levels = [];

  if (!root) return levels;

  function recurse(curr, idx) {
    if (levels.length === idx) levels.push([]);
    levels[idx].push(curr.val);

    if (curr.left) recurse(curr.left, idx + 1);
    if (curr.right) recurse(curr.right, idx + 1);
  }
  recurse(root, 0);
  return levels;
}

function levelOrder(root) {
  const queue = [root];
  const levels = [];
  while (queue.length) {
    const levelLen = queue.length;
    const level = [];
    for (let i = 0; i < levelLen; i++) {
      const curr = queue.pop();

      if (curr) {
        level.push(curr.val);
        queue.unshift(curr.left);
        queue.unshift(curr.right);
      }
    }
    if (level.length) levels.push(level);
  }
  return levels;
}

function levelOrderIterative(root) {
  const levels = [];
  if (!root) return levels;

  const queue = [root];
  while (queue.length) {
    levels.push([]);

    const numberOfChildrenAtLevel = queue.length;
    for (let i = 0; i < numberOfChildrenAtLevel; i++) {
      const node = queue.shift();
      levels[i].push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return levels;
}
