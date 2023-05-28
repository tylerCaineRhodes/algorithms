function cycleInGraph(edges) {
  for (let i = 0; i < edges.length; i++) {
    if (dfs(edges, i)) return true;
  }
  return false;
}

function dfs(edges, startIdx) {
  const stack = [startIdx];
  const seen = new Set();

  while (stack.length) {
    const currIdx = stack.pop();
    seen.add(currIdx);

    if (edges[currIdx].includes(startIdx)) return true;

    for (const child of edges[currIdx]) {
      if (!seen.has(child)) {
        stack.push(child);
      }
    }
  }
  return false;
}

function cycleInGraph(edges) {
  for (let i = 0; i < edges.length; i++) {
    if (dfs(edges, i, new Set())) return true;
  }
  return false;
}

function dfs(edges, startIdx, seen) {
  if (seen.has(startIdx)) return true;
  seen.add(startIdx);

  for (const idx of edges[startIdx]) {
    if (dfs(edges, idx, seen)) return true;
  }
  seen.delete(startIdx);
  return false;
}

function cycleInGraph(edges) {
  const visited = new Array(edges.length).fill(false);
  const currentlyInStack = new Array(edges.length).fill(false);

  for (let i = 0; i < edges.length; i++) {
    if (visited[i]) continue;

    const containsCycle = isNodeInCycle(edges, i, visited, currentlyInStack);
    if (containsCycle) return true;
  }
  return false;
}

function isNodeInCycle(edges, currIdx, visited, currentlyInStack) {
  visited[currIdx] = true;
  currentlyInStack[currIdx] = true;

  for (let neighbor of edges[currIdx]) {
    if (currentlyInStack[neighbor]) return true;

    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        edges,
        neighbor,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    }
  }
  currentlyInStack[currIdx] = false;
  return false;
}
