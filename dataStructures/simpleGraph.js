class Node {
  constructor(val) {
    this.val = val || null
    this.edges = {}
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  };

  addNode = (node) => {
    this.nodes[node.val] = this.nodes[node] || new Node(node.val);
  };

  contains = (node) => {
    return !!this.nodes[node.val];
  };

  addEdge = (node1, node2) => {
    if (this.contains(node1) && this.contains(node2)) {
      this.nodes[node1.val].edges[node2.val] = node2;
      this.nodes[node2.val].edges[node1.val] = node1;
    };
  };

  removeEdge = (node1, node2) => {
    if (this.contains(node1) && this.contains(node2)) {
      delete this.nodes[node1.val].edges[node2.val];
      delete this.nodes[node2.val].edges[node1.val];
    };
  };

  removeNode = (node) => {
    if (this.contains(node)) {
      this.nodes.forEach(targetNode => {
        this.removeEdge(node, targetNode)
      });
      delete this.nodes[node.val];
    };
  };

  forEachNode = (cb) => {
    this.nodes.forEach(targetNode => {
      cb(targetNode);
    });
  };
};

const node1 = new Node(1), node2 = new Node(2), node3 = new Node(3), node4 = new Node(4);
const graph1 = new Graph();

graph1.addNode(node1)
graph1.addNode(node2)
graph1.addNode(node3)
graph1.addNode(node4);
console.log(graph1.contains(node4))
graph1.addEdge(node1, node4)
graph1.addEdge(node2, node4)

console.log(graph1.nodes[1])
