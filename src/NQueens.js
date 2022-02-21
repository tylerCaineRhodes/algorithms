const solveNQueensI = (n) => {
  const placeQueen = (row, col) => {
    queens.add((row, col));
    cols[col] = 1;
    hills[row - col] = 1;
    dales[row + col] = 1;
  };

  const removeQueen = (row, col) => {
    queens.delete((row, col));
    cols[col] = 0;
    hills[row - col] = 0;
    dales[row + col] = 0;
  };

  const addSolution = () => {
    const solution = [];
    queens.forEach(col => {
      StringBuilder(col, solution);
    });
    output.push(solution);
  };

  const StringBuilder = (col, solution) => {
    let str = '';
    for (let i = 0; i < col; i++) {
      str += '.';
    }
    str += 'Q';
    for (let i = 0; i < n - col - 1; i++) {
      str += '.';
    }
    solution.push(str);
  };

  const couldPlace = (row, col) => {
  return !cols[col] && !hills[row - col] && !dales[row + col];
  };

  const backtrack = (row = 0) => {
    if(row === n){
      addSolution();
      return;
    }

    for(let col = 0; col < n; col++){
      if(couldPlace(row, col)){
        placeQueen(row, col);
        backtrack(row + 1);
        removeQueen();
      }
    }
  };
  const cols = new Array(n);
  const hills = new Array(2 * n - 1);
  const dales = new Array(2 * n - 1);
  const queens = new Set();
  const output = [];
  backtrack();
  return output;
};

console.log(solveNQueensI(4))

var solveNQueensII = function (n) {
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


function solveNQueensIII(n, solutions = [], queens = [], row = 0) {
  if (row === n) {
    solutions.push(
      queens.map((col) => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
    );
    return;
  }
  for (let column = 0; column < n; column++) {
    if (
      !queens.some(
        (queenCol, queenRow) =>
          queenCol === column ||
          queenCol === column + queenRow - row ||
          queenCol === column - queenRow + row
      )
    ) {
      queens.push(column);
      solveNQueensIII(n, solutions, queens, row + 1);
      queens.pop();
    }
  }
  return solutions;
}
