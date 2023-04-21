import { BST } from './BST';

const tree1 = new BST(10);
[5, 15, 2, 13, 22, 1, 14, 12, 10, 15].forEach(tree1.insert.bind(tree1));

const tree2 = new BST(10);
tree2.insert(15);

const tree3 = new BST();
[3, 1, 2, 4, 5].forEach(tree3.insert.bind(tree3));


function createBst(arr, start = 0, end = arr.length - 1) {
  if (start > end) return;

  const mid = Math.floor((start + end) / 2);
  const tree = new BST(arr[mid]);

  tree.left = createBst(arr, start, mid - 1);
  tree.right = createBst(arr, mid + 1, end);

  return tree;
}

function createBstII(array) {
  if (!array.length) return null;

  const mid = Math.floor(array.length / 2);
  const tree = new BST(array[mid])

  tree.left = createBst(array.slice(0, mid))
  tree.right = createBst(array.slice(mid + 1))

  return tree;
}

function createBSTIII(array) {
  let p1 = 0;
  let p2 = array.length - 1;

  let mid = Math.floor((p1 + p2) / 2);
  const tree = new BST(array[mid]);

  p2 = mid;

  let curr = tree;

  while (p1 <= p2) {
    const leftMid = Math.floor((p1 + p2) / 2);
    curr.left = new BST(array[leftMid])
    curr = curr.left
    p2 = leftMid - 1;
  }

  p1 = mid;
  p2 = array.length - 1;

  curr = tree;

  while (p1 <= p2) {
    const rightMid = Math.floor((p1 + p2) / 2);
    curr.right = new BST(array[rightMid])
    curr = curr.right
    p1 = rightMid + 1;
  }

  return tree;
}


function sortedArrayToBST(arr) {
  const mid = Math.floor(arr.length / 2);
  const root = new BST(arr[mid]);

  const stack = [[root, 0, mid - 1, arr.length - 1]];

  while (stack.length) {
    const [node, start, mid, end] = stack.pop();

    if (start <= mid - 1) {
      const newMid = Math.floor((start + mid - 1) / 2);
      node.left = new BST(arr[newMid]);
      stack.push([node.left, start, newMid - 1, mid - 1]);
    }

    if (mid + 1 <= end) {
      const newMid = Math.floor((mid + 1 + end) / 2);
      node.right = new BST(arr[newMid]);
      stack.push([node.right, mid + 1, newMid - 1, end]);
    }
  }
  return root;
}
