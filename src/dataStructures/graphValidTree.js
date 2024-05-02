function validTree(n, edges) {
  if (!n) return true;

  const adj = new Map();
  for (let i = 0; i < n; i++) adj.set(i, []);

  for (const [x, y] of edges) {
    adj.set(x, [...adj.get(x), y]);
    adj.set(y, [...adj.get(y), x]);
  }

  const visited = new Set();

  function dfs(idx, prev) {
    if (visited.has(idx)) return false;
    visited.add(idx);

    for (const neighbor of adj.get(idx)) {
      if (neighbor === prev) continue;
      if (!dfs(neighbor, idx)) return false;
    }
    return true;
  }
  return dfs(0, null) && visited.size === n;
}

function validTree(n, edges) {
  if (!n) return true;

  const adj = new Array(n);
  for (let i = 0; i < n; i++) adj[i] = [];

  for (const [x, y] of edges) {
    adj[x].push(y);
    adj[y].push(x);
  }

  const visited = new Set();

  function dfs(idx, prev) {
    if (visited.has(idx)) return false;
    visited.add(idx);

    for (const neighbor of adj[idx]) {
      if (neighbor === prev) continue;
      if (!dfs(neighbor, idx)) return false;
    }
    return true;
  }
  return dfs(0, null) && visited.size === n;
}
