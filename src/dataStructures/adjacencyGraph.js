//graph
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];
const adjacencyList = new Map();

const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

const addEdge = (node1, node2) => {
  adjacencyList.get(node1).push(node2);
  adjacencyList.get(node2).push(node1);
};

airports.forEach((thing) => {
  return addNode(thing);
});

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

const BFS = (node) => {
  const memo = new Set();
  const queue = [node];

  while (queue.length > 0) {
    const curr = queue.shift();
    const neighbors = adjacencyList.get(curr);

    for (const neighbor of neighbors) {
      if (!memo.has(neighbor)) {
        memo.add(neighbor);
        queue.push(neighbor);

        if (neighbor === 'BKK') {
          console.log('found');
          return;
        }
      }
    }
  }

  const seen = [];
  for (const connection of memo.values()) {
    seen.push(connection);
  }
  return seen;
};

const DFS = (node, memo = new Set()) => {
  memo.add(node);
  const neibors = adjacencyList.get(node);

  for (let neighbor of neibors) {
    if (!memo.has(neighbor)) {
      DFS(neighbor, memo);
    }
  }
  return memo;
};
//----------------------------------------------------------
const graph = new Map();

const addNodeI = (node) => {
  graph.set(node, []);
};

const addEdgeI = (node1, node2) => {
  graph.get(node1).push(node2);
  graph.get(node2).push(node1);
};

const removeEdge = (node1, node2) => {
  let i = graph.get(node1).indexOf(node2);
  let j = graph.get(node2).indexOf(node1);
  graph.get(node1).splice(i, 1);
  graph.get(node2).splice(j, 1);
};

const hasEdge = (node1, node2) => {
  if (!graph.get(node1)) {
    return false;
  }
  return graph.get(node1).contains(node2);
};

const target = 'something';
const removeNode = (node, target) => {
  for (let [key, val] of graph) {
    if (val.contains(node)) {
      val = val.filter((val) => val !== node);
    }
    if (key === node) {
      graph.delete(key);
    }
  }
  if (node === target) {
    graph.delete(node);
  }
};
