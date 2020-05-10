var isCousins = function (root, x, y) {
  if (root === null) {
    return false;
  };

  let xData = [],
    yData = [],
    depth = 0,
    parent = null;

  const getTargetInfo = (root, x, y, depth, parent) => {
    if (root === null) {
      return;
    };

    if (root.val === x) {
      xData = xData.concat([depth, parent]);
    };

    if (root.val === y) {
      yData = yData.concat([depth, parent]);
    };

    getTargetInfo(root.left, x, y, depth + 1, root);
    getTargetInfo(root.right, x, y, depth + 1, root);
  };
  getTargetInfo(root, x, y, depth, parent);

  return xData[0] === yData[0] && xData[1] !== yData[1];
};

module.exports = { isCousins };
