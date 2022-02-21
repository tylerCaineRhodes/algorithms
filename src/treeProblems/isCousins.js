function isCousins(root, x, y) {
  if (!root) return false;

  let xData = [], yData = [];
  let depth = 0;
  let parent = null;

  function getTargetInfo(root, x, y, depth, parent) {
    if(!root) return;

    if (root.value === x) xData = [depth, parent];
    if (root.value === y) yData = [depth, parent];

    if(xData.length && yData.length) return;

    getTargetInfo(root.left, x, y, depth + 1, root);
    getTargetInfo(root.right, x, y, depth + 1, root);
  }
  getTargetInfo(root, x, y, depth, parent);

  const [xDepth, xParent] = xData;
  const [yDepth, yParent] = yData;

  return xDepth === yDepth && xParent !== yParent;
}

export { isCousins };
