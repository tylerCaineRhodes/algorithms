function validPath(n, edges, start, end) {
  const adj = new Array(n).fill().map(() => []);
  const visited = {};

  for (const [node, neighbor] of edges) {
    adj[node].push(neighbor);
    adj[neighbor].push(node);
  }

  const stack = [start];
  visited[start] = true;

  while (stack.length) {
    const curr = stack.pop();
    if (curr === end) return true;

    for (const neighbor of adj[curr]) {
      if (neighbor in visited) continue;

      stack.push(neighbor);
      visited[neighbor] = true;
    }
  }
  return false;
}

function validPath(n, edges, start, end) {
  const adj = new Array(n).fill().map(() => []);
  const visited = {};

  for (const [node, neighbor] of edges) {
    adj[node].push(neighbor);
    adj[neighbor].push(node);
  }

  const stack = [start];

  while (stack.length) {
    const curr = stack.pop();
    if (curr === end) return true;

    visited[curr] = true;

    for (const neighbor of adj[curr]) {
      if (neighbor in visited) continue;

      stack.push(neighbor);
    }
  }
  return false;
}

function validPath(n, edges, start, end) {
  const adj = new Array(n).fill().map(() => []);
  const visited = {};

  for (const [node, neighbor] of edges) {
    adj[node].push(neighbor);
    adj[neighbor].push(node);
  }

  function dfs(node) {
    if (node === end) return true;
    if (node in visited) return false;

    visited[node] = true;

    for (const neighbor of adj[node]) {
      if (dfs(neighbor)) {
        return true;
      }
    }
    return false;
  }
  return dfs(start);
}
