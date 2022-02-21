function dijkstrasAlgorithm(start, edges) {
  const minDistances = new Array(edges.length).fill(Infinity);
  minDistances[start] = 0;
  const visited = {};

  while (visited.size !== edges.length) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited);
    if (currentMinDistance === Infinity) break;

    visited[vertex] = true;

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;

      if (destination in visited) continue;

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];

      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  return minDistances.map((val) => (val === Infinity ? -1 : val));
}

function getVertexWithMinDistance(distances, visited) {
  let currentMinDistance = Infinity;
  let vertex = -1;

  for (let i = 0; i < distances.length; i++) {
    const distance = distances[i];

    if (i in visited) continue;
    
    if (distance <= currentMinDistance) {
      vertex = i;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}
