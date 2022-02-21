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

var islandPerimeterI = function (grid) {
  const seen = grid.map((row) => row.map((val) => false));
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) continue;
      if (seen[i][j]) continue;
      seen[i][j] = true;
      result += 4;
      if (i > 0 && grid[i - 1][j] === 1) result -= 2;
      if (j > 0 && grid[i][j - 1] === 1) result -= 2;
    }
  }
  return result;
};

console.log(islandPerimeter(grid));
