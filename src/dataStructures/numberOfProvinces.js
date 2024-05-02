// solution 1 - convert matrix to adj list
class Solution {
  findCircleNum(isConnected) {
    const n = isConnected.length;
    let provinces = 0;

    const visited = new Array(n).fill(false);
    const adj = new Array(n).fill().map(() => []);

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (isConnected[r][c] === 1) {
          adj[r].push(c);
          adj[c].push(r);
        }
      }
    }

    for (let city = 0; city < n; city++) {
      if (visited[city]) continue;
      dfs(city);
      provinces++;
    }

    function dfs(city) {
      if (visited[city]) return;
      visited[city] = true;
      for (const neighbor of adj[city]) {
        if (isConnected[city][neighbor] === 1) {
          dfs(neighbor);
        }
      }
    }
    return provinces;
  }
}

// solution 2 - use matrix directly
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);

  let provinces = 0;

  for (let city = 0; city < n; city++) {
    if (visited[city]) continue;
    dfs(city);
    provinces++;
  }

  function dfs(city) {
    if (visited[city]) return;

    visited[city] = true;

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor]) {
        dfs(neighbor);
      }
    }
  }

  return provinces;
};

var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);

  let provinces = 0;

  for (let city = 0; city < n; city++) {
    if (visited[city]) continue;
    bfs(city);
    provinces++;
  }

  function bfs(city) {
    const queue = [city];

    while (queue.length) {
      const curr = queue.shift();
      if (visited[curr]) continue;

      visited[curr] = true;

      for (let i = 0; i < n; i++) {
        if (i === city) continue; // optional: avoid connections to themselves.
        if (isConnected[curr][i]) {
          queue.push(i);
        }
      }
    }
  }

  return provinces;
};

/*

n = 6

edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]

0: [1, 2]
1: []
2: [5]
3: [4]
4: [2]
5: []



condition -> visited.length === n
visited { 0, 1, 2, 5, 3, 4}
[0, 3]




n = 3
edge = [[0, 1], [2, 1]]

0: [1]
1: []
2: [1]

visited {0, 1}
[0, 2]



n = 5
edges = [[0,1],[2,1],[3,4]]

0: [1]
1: []
2: [1]
3: [4]
4: []

visited {0, 1, 2, 3, 4}
[0, 2, 3]











n = 5
edges = [[1,0],[2,1],[3,2],[4,3]]

0: []
1: [0]
2: [1]
3: [2]
4: [3]

inDegree = [0, 0, 0, 0, 0]

{ 0, 1}
[0, 1, 2, 3]

*/
