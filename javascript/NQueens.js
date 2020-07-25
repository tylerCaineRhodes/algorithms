const solveNQueens = (n) => {

  const placeQueen = (row, col) => {
    queens.add(row, col);
    cols[col] = 1;
    hills[row - col] = 1;
    dales[row + col] = 1;
  }

  const removeQueen = (row, col) => {
    queens.delete(row, col)
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
    solution.push(str);
  }

  const couldPlace = (row, col) => {
    let bool = !(cols[col] + hills[row - col] + dales[row + col]);
    return bool;
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

console.log(solveNQueens(5))
