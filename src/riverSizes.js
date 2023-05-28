function riverSizes(matrix) {
  const riverSizes = [];
  const visited = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(false));

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (visited[r][c]) continue;
      if (!matrix[r][c]) continue;
      traverseRivers(matrix, r, c, visited, riverSizes);
    }
  }
  return riverSizes;
}

function traverseRivers(matrix, r, c, visited, riverSizes) {
  let count = 0;

  const queue = [[r, c]];
  while (queue.length) {
    const [r, c] = queue.shift();

    visited[r][c] = true;
    count++;

    for (const neighbor of getNeighbors(matrix, r, c, visited)) {
      const [r, c] = neighbor;
      if (matrix[r][c] === 0) continue;
      if (visited[r][c]) continue;

      queue.push(neighbor);
    }
  }

  if (count > 0) {
    riverSizes.push(count);
  }
}

function getNeighbors(matrix, r, c) {
  const neighbors = [];
  if (r > 0) neighbors.push([r - 1, c]);
  if (c > 0) neighbors.push([r, c - 1]);
  if (c < matrix[0].length - 1) neighbors.push([r, c + 1]);
  if (r < matrix.length - 1) neighbors.push([r + 1, c]);
  return neighbors;
}

const testMatrix1 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const testMatrix2 = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]];
console.log(riverSizes(testMatrix1));
console.log(riverSizes(testMatrix2));

function riverSizes(matrix) {
  const riverSizes = [];
  const visited = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(false));

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (visited[r][c]) continue;
      if (!matrix[r][c]) {
        visited[r][c] = true;
        continue;
      }
      traverseRivers(matrix, r, c, visited, riverSizes);
    }
  }
  return riverSizes;
}

function traverseRivers(matrix, r, c, visited, riverSizes) {
  let count = 0;

  const queue = [[r, c]];
  while (queue.length) {
    const [r, c] = queue.shift();

    if (visited[r][c]) continue;
    visited[r][c] = true;

    if (matrix[r][c] === 0) continue;
    count++;

    for (const neighbor of getNeighbors(matrix, r, c, visited)) {
      queue.push(neighbor);
    }
  }

  if (count > 0) {
    riverSizes.push(count);
  }
}

function getNeighbors(matrix, r, c) {
  const unvisited = [];
  if (r > 0) unvisited.push([r - 1, c]);
  if (c > 0) unvisited.push([r, c - 1]);
  if (c < matrix[0].length - 1) unvisited.push([r, c + 1]);
  if (r < matrix.length - 1) unvisited.push([r + 1, c]);
  return unvisited;
}

function riverSizes(matrix) {
  const seen = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(false)
  );
  const riverSizes = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (seen[r][c]) continue;
      if (matrix[r][c] === 0) {
        seen[r][c] = true;
        continue;
      }
      traverseRiver(matrix, r, c, seen, riverSizes);
    }
  }
  return riverSizes;
}

function traverseRiver(matrix, r, c, seen, riverSizes) {
  const queue = [[r, c]];
  let count = 0;
  while (queue.length) {
    const [r, c] = queue.pop();

    seen[r][c] = true;
    if (matrix[r][c] === 0) continue;

    count++;
    for (const neighbor of getUnvisitedNeighbors(matrix, r, c, seen)) {
      queue.push(neighbor);
    }
  }

  if (count > 0) {
    riverSizes.push(count);
  }
}

function getUnvisitedNeighbors(matrix, r, c, seen) {
  const neighbors = [];
  if (r > 0 && !seen[r - 1][c]) neighbors.push([r - 1, c]);
  if (c > 0 && !seen[r][c - 1]) neighbors.push([r, c - 1]);
  if (c < matrix[0].length - 1 && !seen[r][c + 1]) neighbors.push([r, c + 1]);
  if (r < matrix.length - 1 && !seen[r + 1][c]) neighbors.push([r + 1, c]);
  return neighbors;
}
