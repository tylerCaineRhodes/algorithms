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
  //ini currentMinDistance and vertex
  let currentMinDistance = Infinity;
  let vertex = -1;

  for (let vertexIdx = 0; vertexIdx < distances.length; vertexIdx++) {
    const distance = distances[vertexIdx];

    if (vertexIdx in visited) continue;
    
    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}
