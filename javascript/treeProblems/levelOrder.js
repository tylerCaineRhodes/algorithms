var levelOrder = function (root) {
  //initialize levels result
  const levels = [];
  //if no root, return empty array
  if (!root) return levels;

  const findLevelOrders = (node, index) => {
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
  findLevelOrders(root, 0);
  return levels;
};

function levelOrderIterative(root) {
  const levels = [];
  if(!root) return levels;
  const index = 0;
  const queue = [root];

  while(queue.length) {
    levels.push([]);
    const numberOfChildrenAtLevel = queue.length;

    for(let i = 0; i < numberOfChildrenAtLevel; i++) {
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


function levelOrder(root) {
  if (!root) return [];

  const levels = [];
  getLevelOrder(root, 0, levels);
  return levels;
}

function getLevelOrder(node, index, levels) {
  if (!node) return;

  if (index === levels.length) {
    levels.push([]);
  }
  levels[index].push(node.val);
  getLevelOrder(node.left, index + 1, levels);
  getLevelOrder(node.right, index + 1, levels);
}
