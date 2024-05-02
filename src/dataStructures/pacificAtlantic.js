// BFS
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0].length) return [];

  const pacQueue = [];
  const atlQueue = [];

  const m = heights.length;
  const n = heights[0].length;

  for (let r = 0; r < m; r++) {
    pacQueue.push([r, 0]);
    atlQueue.push([r, n - 1]);
  }

  for (let c = 0; c < n; c++) {
    pacQueue.push([0, c]);
    atlQueue.push([m - 1, c]);
  }

  function bfs(queue) {
    const reachable = new Map();

    while (queue.length) {
      const [r, c] = queue.shift();

      if (!reachable.has(r)) {
        reachable.set(r, new Map());
      }

      if (reachable.get(r).has(c)) {
        continue;
      }

      reachable.get(r).set(c, true);

      for (const [rDiff, cDiff] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const [newRow, newCol] = [r + rDiff, c + cDiff];
        if (newRow < 0 || newCol < 0 || newRow >= m || newCol >= n) continue;

        if (heights[newRow][newCol] >= heights[r][c]) {
          queue.push([newRow, newCol]);
        }
      }
    }
    return reachable;
  }

  const pacReachable = bfs(pacQueue);
  const atlReachable = bfs(atlQueue);

  const result = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (
        pacReachable.has(r) &&
        pacReachable.get(r).has(c) &&
        atlReachable.has(r) &&
        atlReachable.get(r).has(c)
      ) {
        result.push([r, c]);
      }
    }
  }
  return result;
};

// DFS
var pacificAtlantic = function (heights) {
  const pac = new Map();
  const atl = new Map();
  // set first and last cols
  for (let r = 0; r < heights.length; r++) {
    // set first col to pac
    dfs(r, 0, pac, heights[r][0]);
    // set last col to atl
    dfs(r, heights[0].length - 1, atl, heights[r][heights[0].length - 1]);
  }

  // set first and last rows
  for (let c = 0; c < heights[0].length; c++) {
    // set first row to pac
    dfs(0, c, pac, heights[0][c]);
    // set last row to atl
    dfs(heights.length - 1, c, atl, heights[heights.length - 1][c]);
  }

  const overlap = [];
  for (const [key, coords] of pac) {
    if (atl.has(key)) {
      overlap.push(coords);
    }
  }
  return overlap;

  function dfs(r, c, seen, prevHeight) {
    if (r < 0 || c < 0) return;
    if (r > heights.length - 1 || c > heights[0].length - 1) return;

    const key = toKey(r, c);

    if (seen.has(key)) return;
    if (heights[r][c] < prevHeight) return;

    seen.set(key, [r, c]);

    dfs(r + 1, c, seen, heights[r][c]);
    dfs(r - 1, c, seen, heights[r][c]);
    dfs(r, c + 1, seen, heights[r][c]);
    dfs(r, c - 1, seen, heights[r][c]);
  }

  function toKey(r, c) {
    return `${r}:${c}`;
  }
};
