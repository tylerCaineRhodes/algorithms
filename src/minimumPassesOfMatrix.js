// using two queues
function minimumPassesOfMatrix(matrix) {
  let nextQueue = getAllPositive(matrix);
  let currQueue = [];
  let passes = 0;
  while (nextQueue.length) {
    [currQueue, nextQueue] = [nextQueue, currQueue];
    while (currQueue.length) {
      const [currRow, currCol] = currQueue.shift();
      for (const neighbor of getNeighbors(matrix, currRow, currCol)) {
        const [r, c] = neighbor;
        if (matrix[r][c] < 0) {
          matrix[r][c] = Math.abs(matrix[r][c]);
          nextQueue.push([r, c]);
        }
      }
    }
    passes++;
  }
  return containsNegative(matrix) ? -1 : passes - 1;
}

// using the same queue
function minimumPassesOfMatrix(matrix) {
  const queue = getAllPositive(matrix);

  let passes = 0;
  while (queue.length) {
    let currQueueSize = queue.length;

    while (currQueueSize) {
      const [currRow, currCol] = queue.shift();

      for (const neighbor of getNeighbors(matrix, currRow, currCol)) {
        const [r, c] = neighbor;
        if (matrix[r][c] < 0) {
          matrix[r][c] = Math.abs(matrix[r][c]);
          queue.push([r, c]);
        }
      }
      currQueueSize--;
    }
    passes++;
  }
  return containsNegative(matrix) ? -1 : passes - 1;
}

// shared helpers
function getAllPositive(matrix) {
  const positive = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] > 0) {
        positive.push([r, c]);
      }
    }
  }
  return positive;
}

function getNeighbors(matrix, r, c) {
  const neighbors = [];
  if (r > 0) neighbors.push([r - 1, c]);
  if (r < matrix.length - 1) neighbors.push([r + 1, c]);
  if (c > 0) neighbors.push([r, c - 1]);
  if (c < matrix[0].length - 1) neighbors.push([r, c + 1]);
  return neighbors;
}

function containsNegative(matrix) {
  return matrix.flat().some((val) => val < 0);
}
