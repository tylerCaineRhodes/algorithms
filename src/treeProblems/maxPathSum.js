var maxPathSum = function (root) {
  let result = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    const leftUnsplitMax = Math.max(dfs(node.left), 0);
    const rightUnsplitMax = Math.max(dfs(node.right), 0);

    const splitSum = leftUnsplitMax + rightUnsplitMax + node.val;
    const notSplitSum = Math.max(rightUnsplitMax, leftUnsplitMax) + node.val;

    result = Math.max(result, splitSum, notSplitSum);
    return notSplitSum;
  }
  dfs(root);
  return result;
};

var maxPathSum = function (root) {
  function dfs(node) {
    if (!node) return [0, -Infinity];

    const leftUnsplitMax = dfs(node.left)[0];
    const rightUnsplitMax = dfs(node.right)[0];

    const splitHereSum = leftUnsplitMax + rightUnsplitMax + node.val;
    const notSplitHereSum = Math.max(
      Math.max(rightUnsplitMax, leftUnsplitMax) + node.val,
      node.val
    );

    return [notSplitHereSum, splitHereSum];
  }
  return dfs(root)[0];
};

function maxPathSum(tree) {
  const [branchSum, maxSum] = findMaxPath(tree);
  return maxSum;
}

function findMaxPath(tree) {
  if (!tree) return [0, -Infinity];
  //initialize current max branchsums and max triangleSums for left and right
  const [maxLeftBranch, maxLeftTriangle] = findMaxPath(tree.left);
  const [maxRightBranch, maxRightTriangle] = findMaxPath(tree.right);
  //get max branch sum for curr
  const val = tree.value;
  const maxChildBranch = Math.max(maxLeftBranch, maxRightBranch);
  const maxCurrBranch = Math.max(maxChildBranch + val, val);
  //gt curr Triangle sum
  const currTriangle = Math.max(
    maxLeftBranch + maxRightBranch + val,
    maxCurrBranch
  );

  const maxPathSum = Math.max(currTriangle, maxLeftTriangle, maxRightTriangle);
  //get maxTriangle sum for curr
  return [maxCurrBranch, maxPathSum];
  //return maxBranchSums and currMaxTriangle
}
