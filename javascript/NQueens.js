const solveNQueensHardMode = (n) => {

  const placeQueen = (row, col) => {
    queens.add((row, col));
    cols[col] = 1;
    hills[row - col] = 1;
    dales[row + col] = 1;
  }

  const removeQueen = (row, col) => {
    queens.delete((row, col))
    cols[col] = 0;
    hills[row - col] = 0;
    dales[row + col] = 0;
  }

  const addSolution = () => {
    solution = [];
    queens.forEach(col => {
      StringBuilder(col, solution)
  
    })
    output.push(solution)
  }

  const StringBuilder = (col, solution) => {
    let str = '';
    for (let i = 0; i < col; i++) {
      str += '.';
    }
    str += 'Q';
    for (let i = 0; i < n - col - 1; i++) {
      str += '.';
    }
    console.log(solution)
    solution.push(str);
    console.log(solution)
  }

  const couldPlace = (row, col) => {
    let bool = (!cols[col] && !hills[row - col] && !dales[row + col]);
    return bool
  }

  const backtrack = (row = 0) => {
    for(let col = 0; col < n; col++){
      if(couldPlace(row, col)){
        placeQueen(row, col);
        if(row + 1 === n){
          addSolution();
        } else {
          backtrack(row + 1)
        }
        removeQueen();
      }
    }
    return;
  }
  
  const cols = new Array(n);
  const hills = new Array(2 * n - 1);
  const dales = new Array(2 * n - 1);
  const queens = new Set();
  const output = [];
  backtrack();
  return output;
};

var solveNQueens = function (n) {
  const result = [];
  backtrack(result, n);
  return result;
};

const areConflicts = (board, col_pos, currentRow) => {
   return board.some((placedColVal, takenRow) => {
    return placedColVal === col_pos || placedColVal === col_pos + currentRow - takenRow || placedColVal === col_pos - currentRow + takenRow
  });
};

const backtrack = (result, n, board = [], currentRow = 0) => {
  if (currentRow === n) {
    result.push(board.map((placedColVal) => '.'.repeat(placedColVal) + 'Q' + '.'.repeat(n - placedColVal - 1)));
    return;
  }

  for (let col_pos = 0; col_pos < n; col_pos++) {
    if (!areConflicts(board, col_pos, currentRow)) {
      board.push(col_pos);
      backtrack(result, n, board, currentRow + 1);
      board.pop();
    }
  }
}
console.log(solveNQueens(4))
