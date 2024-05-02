function findSmallestSetOfVertices(n, edges) {
  const adj = new Array(n).fill().map(() => []);

  for (const [node, neighbor] of edges) {
    adj[node].push(neighbor);
  }

  const inDegrees = new Array(n).fill(0);
  for (const neighbors of adj) {
    for (const neighbor of neighbors) {
      inDegrees[neighbor]++;
    }
  }

  const startNodes = inDegrees.reduce((acc, _, i) => {
    if (inDegrees[i] === 0) acc.push(i);
    return acc;
  }, []);
  return startNodes;
}

function findSmallestSetOfVertices(n, edges) {
  const inDegrees = new Array(n).fill(0);
  for (const [, neighbor] of edges) {
    inDegrees[neighbor]++;
  }

  return inDegrees.reduce((acc, _, i) => {
    if (inDegrees[i] === 0) acc.push(i);
    return acc;
  }, []);
}
