function cycleInGraph(edges) {
  const visited = new Array(edges.length).fill(false);
  const currentlyInStack = new Array(edges.length).fill(false);

  for(let i = 0; i < edges.length; i++) {
    if(visited[i]) continue;

    const containsCycle = isNodeInCycle(edges, i, visited, currentlyInStack);
    if(containsCycle) return true;
  }
  return false;
}

function isNodeInCycle(edges, i, visited, currentlyInStack) {
  visited[i] = true;
  currentlyInStack[i] = true;

  for(let j of edges[i]) {
    if(!visited[j]) {
      const containsCycle = isNodeInCycle(edges, j, visited, currentlyInStack);
      if(containsCycle) return true;
    } else if (currentlyInStack[j]) {
      return true;
    }
  }
  currentlyInStack[i] = false;
  return false;
}