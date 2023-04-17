class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  add(value) {
    console.log(value)
    if (!this.value) {
      this.value = value;
    } else {
      this.children.push(new Tree(value));
    }
  }

  remove(val) {
    if (this.value === val) {
      this.value = null;
    } else {
      this.children.forEach((child) => {
        child.remove(val);
      });
    }
  }
}

const DFS = (node, val) => {
  let collection = [node];

  while (collection.length) {
    let node = collection.shift();

    if (node.value === val) {
      return true;
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
      collection.unshift(node.children[i]);
    }
  }
  return false;
};

const BFS = (node, val) => {
  let collection = [node];

  while (collection.length) {
    let node = collection.shift();

    if (node.value === val) {
      return true;
    }
    for (let childNode of node.children) {
      collection.push(childNode);
    }
  }
  return false;
};

const tree = new Tree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.children[0].add(4);
tree.children[0].add(5);
tree.children[1].add(6);
tree.children[1].add(7);
tree.remove(2);

console.log(BFS(tree, 3));
console.log(BFS(tree, 2));

function BFS_PRINT(tree) {
  const queue = [tree];
  const seen = [];

  while (queue.length) {
    const curr = queue.shift()

    seen.push(curr.value);

    for (const child of curr.children) {
      queue.push(child)
    }
  }

  return seen;
}

function DFS_PRINT(tree) {
  const stack = [tree];
  const seen = [];

  while (stack.length) {
    const curr = stack.pop();

    seen.push(curr.value);

    for (let i = curr.children.length - 1; i >= 0; i--) {
      stack.push(curr.children[i])
    }
  }

  return seen;
}


const parent = new Tree(1);
[2, 3, 4, 5].map(parent.add.bind(parent));

const firstChild = parent.children[0];
[6, 7, 8, 9].map(firstChild.add.bind(firstChild));

firstChild.children[0].add(10)
firstChild.children[3].children = [new Tree(11, [new Tree(13)]), new Tree(12)]

/*
 Example tree looks like:
          1
        / |\
      [2 3 4 5]
      /
    [6, 7, 8, 9]
    /         \
  [10]        [11, 12]
              /
            [13]
*/

console.log(BFS_PRINT(parent)) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13
console.log(DFS_PRINT(parent))  // 1, 2, 6, 10, 7, 8, 9, 11, 12, 3, 4, 5
