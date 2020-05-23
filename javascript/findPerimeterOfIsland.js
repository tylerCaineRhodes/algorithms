let grid = [[0,1,0,0],[1,1,1,0], [0,1,0,0], [1,1,0,0]]

const islandPerimeter = (map) => {
  //total
  let total = 0;
  const collectVal = (row, index) => {
    if(map[row] === undefined || map[row][index] === undefined){
      return 0;
    } 
    return map[row][index];
  }

  for(let row = 0; row < map.length; row++){
    for(let colIndex = 0; colIndex < map[row].length; colIndex++){
      if(map[row][colIndex] === 0) continue;
      let currentBorder = 4;
      currentBorder -= collectVal(row - 1, colIndex);
      currentBorder -= collectVal(row, colIndex + 1);
      currentBorder -= collectVal(row + 1, colIndex);
      total += currentBorder;
    }
  }
return total
}

console.log(islandPerimeter(grid))