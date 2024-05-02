var kthSmallest = function (root, k) {
  let count = 0;
  let answer;

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    count++;

    if (count === k) {
      answer = node.val;
      return;
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);
  return answer;
};

class Node {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

var kthSmallest = function (root, k) {
  const arr = inOrderArr(root);
  function inOrderArr(curr, arr = []) {
    if (!curr) return arr;
    inOrderArr(curr.left, arr);
    arr.push(curr.val);
    inOrderArr(curr.right, arr);
    return arr;
  }
  return arr[k - 1];
};
