const islandPerimeter = (map) => {
  let total = 0;

  for(let row = 0; row < map.length; row++){
    for(let colIndex = 0; colIndex < map[row].length; colIndex++){
      if(map[row][colIndex] === 0) continue;
      let currentBorder = 4;
      currentBorder -= collectVal(map, row - 1, colIndex);
      currentBorder -= collectVal(map, row, colIndex + 1);
      currentBorder -= collectVal(map, row + 1, colIndex);
      total += currentBorder;
    }
  }
return total
}

const collectVal = (map, row, index) => {
  if (map[row] === undefined || map[row][index] === undefined) {
    return 0;
  }
  return map[row][index];
};

let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(grid));
