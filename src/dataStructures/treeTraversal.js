class Node {
  constructor(value, children) {
    this.value = value || null;
    this.children = children || [];
  }
  add = (value) => {
    if (!this.value) {
      this.value = value;
    } else {
      this.children.push(new Node(value));
    }
  };

  remove = (val) => {
    if (this.value === val) {
      this.value = null;
      return;
    } else {
      this.children.forEach((childNode) => {
        childNode.remove(val);
      });
    }
  };
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

let tree = new Node();

tree.add(1);
tree.add(2);
tree.add(3);
tree.children[0].add(4);
tree.children[0].add(5);
tree.children[1].add(6);
tree.children[1].add(7);
tree.remove(2);

console.log(BFS(tree, 3));
