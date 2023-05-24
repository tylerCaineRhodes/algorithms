/*

A - B - E - F
|   |   | 
C - D   G - H

*/

const graph = {
  A: ['B', 'C'],
  B: ['A', 'E', 'D'],
  C: ['A', 'D'],
  D: ['C', 'B'],
  E: ['B', 'F', 'G'],
  F: ['E'],
  G: ['E', 'H'],
  H: ['G'],
};

function bidirectionalSearch(graph, start, goal) {
  if (start === goal) return [start];

  const forwardQueue = [[start, [start]]];
  const backwardQueue = [[goal, [goal]]];

  const forwardVisited = new Map().set(start, [start]);
  const backwardVisited = new Map().set(goal, [goal]);

  while (forwardQueue.length && backwardQueue.length) {
    let path = bidirectionalSearchStep(
      graph,
      forwardQueue,
      forwardVisited,
      backwardVisited
    );

    if (path) return path;

    path = bidirectionalSearchStep(
      graph,
      backwardQueue,
      backwardVisited,
      forwardVisited
    );

    if (path) return path.reverse();
  }

  return null;
}

function bidirectionalSearchStep(graph, queue, visited, otherVisited) {
  const [curr, pathToCurr] = queue.shift();

  for (const neighbor of graph[curr]) {
    if (otherVisited.has(neighbor)) {
      return pathToCurr.concat(otherVisited.get(neighbor).slice(1).reverse());
    }

    if (!visited.has(neighbor)) {
      visited.set(neighbor, [...pathToCurr, ...neighbor]);
      queue.push([neighbor, [...pathToCurr, ...neighbor]]);
    }
  }

  return null;
}

console.log(bidirectionalSearch(graph, 'A', 'H')); // Output: [ 'A', 'B', 'E', 'G', 'H' ]
