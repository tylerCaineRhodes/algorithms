function countComponents(n, edges) {
  let count = 0;

  const visited = new Set();
  const adj = new Array(n).fill().map(() => []);

  for (const [x, y] of edges) {
    adj[x].push(y);
    adj[y].push(x);
  }

  for (let node = 0; node < n; node++) {
    if (visited.has(node)) continue;
    count++;
    dfs(node);
  }

  return count;

  function dfs(node) {
    visited.add(node);

    for (const neighbor of adj[node]) {
      if (visited.has(neighbor)) continue;
      dfs(neighbor);
    }
  }

  function bfs(node) {
    const queue = [node];

    while (queue.length) {
      const curr = queue.pop();
      visited.add(curr);

      for (const neighbor of adj[curr]) {
        if (visited.has(neighbor)) continue;
        queue.unshift(neighbor);
      }
    }
  }
}
