function zigzagTraverse(array) {
  const height = array.length - 1;
  const width = array[0].length - 1;
  const result = [];

  let row = 0, col = 0, goingDown = true;

  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col]);

    if (goingDown) {
      //if current location is at the border
      if (col === 0 || row === height) {
        //change direction
        goingDown = false;
        //if at bottom row, go right. Otherwise, go down
        if (row === height) {
          col += 1;
        } else {
          row += 1;
        }
      } else {
        //if current location isn't at border, go diagonally down
        row += 1;
        col -= 1;
      }
      //if going Up...
    } else {
      //if at top row or last column/ at the border
      if (row === 0 || col === width) {
        //change direction
        goingDown = true;
        //if at last column, go down. Otherwise, go right
        if (col === width) {
          row += 1;
        } else {
          col += 1;
        }
        //if not at the top border, go diagonally up
      } else {
        row -= 1;
        col += 1;
      }
    }
  }
  return result;
}

function isOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width;
}
