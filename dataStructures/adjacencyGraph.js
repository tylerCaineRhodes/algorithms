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

const BFS = (singleNode) => {
  const seen = new Set();
  let collection = [singleNode];

  while (collection.length > 0) {
    const current = collection.shift();
    const edges = adjacencyList.get(current);

    for (const child of edges) {
      if (!seen.has(child)) {
        seen.add(child);
        collection.push(child);

        if (child === 'BKK') {
          console.log('found');
          return;
        }
      }
    }
  }
  let result = [];
  let resultiterator = seen.values();
  for (let thing of resultiterator) {
    result.push(thing);
  }
  return result;
};

const DFS = (singleNode, seen = new Set()) => {
  seen.add(singleNode);
  const edges = adjacencyList.get(singleNode);

  for (let child of edges) {
    if (!seen.has(child)) {
      DFS(child, seen);
    }
  }
  return seen;
};
//----------------------------------------------------------
const graph = new Map();

const addNode = (node) => {
  graph.set(node, []);
};

const addEdge = (node1, node2) => {
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
  if(!graph.get(node1)){
    return false;
  }
  return graph.get(node1).contains(node2);
}

const removeNode = (node) => {
  //iterate over graph and delete children 
  for(let [key,val] of graph){
    if(val.contains(node)){
      val = val.filter(val => val !== node)
    }
    if(key === node){
      graph.delete(key)
    } 
  }

  if (node === target) {
    graph.delete(node);
  }
};
