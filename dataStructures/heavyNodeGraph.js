class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
  addEdge = (node) => {
    this.edges.push(node);
  };
  removeEdge = (node) => {
    const i = this.edges.indexOf(node);
    this.edges.splice(i, 1);
    return node;
  };
  getEdges = () => {
    return this.edges;
  };
  isEdgeof = (node) => {
    return !!this.edges.contains(node);
  };
}
