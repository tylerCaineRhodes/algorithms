var levelOrder = function (root) {
  //initialize levels result
  const levels = [];
  //if no root, return empty array
  if (!root) return levels;

  const findLevelOrders = (node, index = 0) => {
    //if currentIndex is equal to the length of levels, initialize empty array
    if (index === levels.length) {
      levels.push([]);
    }
    //push current Value
    levels[index].push(node.val);

    if (node.left) {
      findLevelOrders(node.left, index + 1);
    }

    if (node.right) {
      findLevelOrders(node.right, index + 1);
    }
  };
  findLevelOrders(root);
  return levels;
};

function levelOrderIterative(root) {
  const levels = [];
  if(!root) return levels;
  const index = 0;
  const queue = [root];

  while(queue.length) {
    levels.push([]);
    const levelLength = queue.length;

    for(let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      levels[index].push(node.val);

      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    index++;
  }
  return levels;
}
