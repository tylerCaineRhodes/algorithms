function heightBalancedBinaryTree(node) {
  const [isBalanced, _height] = getTreeInfo(node);
  return isBalanced;
}

function getTreeInfo(node) {
  if (!node) return [true, 0];
  const [leftIsBalanced, leftHeight] = getTreeInfo(node.left);
  const [rightIsBalanced, rightHeight] = getTreeInfo(node.right);

  const currentHeight = Math.max(leftHeight, rightHeight) + 1;
  const currIsBalanced = rightIsBalanced && leftIsBalanced && Math.abs(leftHeight - rightHeight) <= 1;
  return [currIsBalanced, currentHeight];
}


// top down approach
function isBalanced(root) {
  return getTreeInfoII(root).isBalanced;
};

function getTreeInfoII(node) {
  if (!node) return { isBalanced: true, height: 0 };

  const { isBalanced: isLeftBalanced, height: leftHeight } = getTreeInfo(node.left);
  const { isBalanced: isRightBalanced, height: rightHeight} = getTreeInfo(node.right);

  const height = Math.max(leftHeight, rightHeight) + 1;
  const isBalanced = isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

  return { isBalanced, height }
}



class TreeInfo {
  constructor(height = 0, balanced = true) {
    this.height = height;
    this.balanced = balanced;
  }
}

var isBalanced = function(root) {
  return getTreeInfo(root).balanced;
};

function getTreeInfo(node) {
  if (!node) return new TreeInfo();

  const left = getTreeInfo(node.left);
  const right = getTreeInfo(node.right);

  const height = Math.max(left.height, right.height) + 1;
  const isBalanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;

  return new TreeInfo(height, isBalanced);
}

var isBalanced = function(root) {
  return getTreeInfo(root).balanced;
};


function getTreeInfo(node) {
  if (!node) return new TreeInfo();

  const left = getTreeInfo(node.left);
  if (!left.balanced) return new TreeInfo(0, false); // reinstantiate to avoid further calculations

  const right = getTreeInfo(node.right);
  if (!right.balanced) return new TreeInfo(0, false);

  const isBalanced = Math.abs(left.height - right.height) <= 1;

  if (isBalanced) {
    const height = Math.max(left.height, right.height) + 1;
    return new TreeInfo(height, true)
  } else {
    return new TreeInfo(0, false)
  }
}
