class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
  //bfs insertion, alt
  insert = (val) => {
    const collection = [this];

    while (collection.length) {
      let current = collection.pop();
   
      if (!current.left) {
        current.left = new Node(val);
        return;
      }
      if (!current.right) {
        current.right = new Node(val);
        return;
      }
      collection.unshift(current.left);
      collection.unshift(current.right);
    }
  };
}

const bfsInsertion = (node, arr, index) => {
  if (index >= arr.length) return node;

  let current = new Node(arr[index]);
  node = current;

  node.left = bfsInsertion(node.left, arr, 2 * index + 1);
  node.right = bfsInsertion(node.right, arr, 2 * index + 2);

  return node;
};

function bfsInsertionII(arr, index = 0) {
  if (index >= arr.length) return null;

  const node = new Node(arr[index]);

  node.left = bfsInsertion(arr, 2 * index + 1);
  node.right = bfsInsertion(arr, 2 * index + 2);

  return node;
}

function BFS_demarkated_print(node) {
  if (!node) return [];

  const queue = [node];

  let level = 0;
  const seen = [`LEVEL-${level++}`];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      seen.push(currentNode ? currentNode.value : null);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    if (queue.length) seen.push(`LEVEL-${level++}`);
  }

  return seen;
}

function BFS_with_level_print(node) {
  if (!node) return [];

  const queue = [{ node, level: 0 }];
  const seen = [];

  while (queue.length) {
    const { node: curr, level } = queue.pop();
    seen.push({ value: curr?.value, level });

    if (curr.left) queue.unshift({ node: curr.left, level: level + 1 });
    if (curr.right) queue.unshift({ node: curr.right, level: level + 1 });
  }

  return seen;
}

const sortedArrayToBST = (arr, start, end) => {
  if (start > end) return;

  let mid = Math.floor((start + end) / 2);
  const root = new Node(arr[mid]);

  root.left = sortedArrayToBST(arr, start, mid - 1);
  root.right = sortedArrayToBST(arr, mid + 1, end);
  return root;
};

function BFS_Print(node) {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let node = collection.shift();
    seen.push(node.value);

    if (node.left) {
      collection.push(node.left);
    }
    if (node.right) {
      collection.push(node.right);
    }
  }
  return seen;
}

const DFS_Print = (node) => {
  let collection = [node];
  let seen = [];

  while (collection.length) {
    let node = collection.shift();
    seen.push(node.value);

    if (node.right) {
      collection.unshift(node.right);
    }
    if (node.left) {
      collection.unshift(node.left);
    }
  }
  return seen;
};

const normalDF_Print = (node) => {
  let seen = [];

  const traverse = (node) => {
    seen.push(node.value);

    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(node);
  return seen;
};

export {
  Node,
  bfsInsertion,
  BFS_Print,
  DFS_Print,
  normalDF_Print,
  sortedArrayToBST,
};
