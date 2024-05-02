var cloneGraph = function (node) {
  if (!node) return null;

  const oldToNew = new Map();
  oldToNew.set(node, new Node(node.val));

  const queue = [node];
  while (queue.length) {
    const curr = queue.pop();
    for (const neighbor of curr.neighbors) {
      if (!oldToNew.has(neighbor)) {
        oldToNew.set(neighbor, new Node(neighbor.val));
        queue.unshift(neighbor);
      }

      const parentCopy = oldToNew.get(curr);
      const neighborCopy = oldToNew.get(neighbor);
      parentCopy.neighbors.push(neighborCopy);
    }
  }
  return oldToNew.get(node);
};
