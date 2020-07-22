function riverSizes(matrix) {
  let visited = matrix.map(row => row.map(val => false));
  let result = [];
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(visited[i][j]) continue;
      traverseNode(matrix, i, j, visited, result);
    }
  }
  return result;
}

const traverseNode = (grid, i, j, aux, result) => {
  let currRiverSize = 0; 
  const unvisitedQueue= [[i, j]];

  while(unvisitedQueue.length){
    let [row, col] = unvisitedQueue.pop();
    if(aux[row][col]) continue;
    aux[row][col] = true;
    if(grid[row][col] === 0) continue;
    currRiverSize++;
    let unvisitedNodes = getUnvisited(row, col, grid, aux);
    for(let nodePair of unvisitedNodes){
      unvisitedQueue.push(nodePair);
    }
  }
  if(currRiverSize > 0){
    result.push(currRiverSize);
  }
}

const getUnvisited = (row, col, matrix, aux) => {
  let unvisited = [];
  
  if(row > 0 && !aux[row - 1][col]){
    unvisited.push([row - 1, col])
  }
  if(row < matrix.length - 1 && !aux[row + 1][col]){
    unvisited.push([row + 1, col])
  }
  if(col > 0 && !aux[row][col - 1]){
    unvisited.push([row, col - 1])
  }
  if(col < matrix[row].length - 1 && !aux[row][col + 1]){
    unvisited.push([row, col + 1])
  }
  return unvisited;
}

let testMatrix1 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
console.log(riverSizes(testMatrix1));
