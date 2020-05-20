/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
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
  constructor(val, left, right){
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}
