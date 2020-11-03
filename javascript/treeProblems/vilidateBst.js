import { Node, bfsInsertion } from '../../helperFunctions/binaryTreeMethods';
import { isSorted } from '../isSortedRecursive';
const test = bfsInsertion(new Node(), [
  10,
  5,
  15,
  2,
  5,
  13,
  22,
  1,
  null,
  null,
  null,
  null,
  14,
  null,
  null,
], 0);

function validateBst(tree) {
  let arr = [];
  const checkInOrder = (tree) => {
    if (!tree) return;

    if (tree.left) {
      checkInOrder(tree.left);
    }
    arr.push(tree.value);

    if (tree.right) {
      checkInOrder(tree.right);
    }
  };
  checkInOrder(tree);
  arr =arr.filter(val => val !== null)
  return isSorted(arr);
}

console.log(validateBst(test))

