class TicTacToeBruteForce {
  constructor(n) {
    this.n = n;
    this.board = new Array(n).fill().map(() => new Array(n).fill(0));
  }

  checkDiagonal(player) {
    for (let i = 0; i < this.n; i++) {
      if (this.board[i][i] !== player) return false;
    }
    return true;
  }

  checkAntiDiagonal(player) {
    for (let r = this.n - 1; r >= 0; r--) {
      if (this.board[r][(this.n - 1) - r] !== player) return false;
    }
    return true;
  }

  checkCols(player) {
    for (let c = 0; c < this.n; c++) {
      for (let r = 0; r < this.n; r++) {
        if (this.board[r][c] !== player) {
          break;
        }

        if (r === this.n - 1) {
          return true;
        }
      }
    }
    return false;
  }

  checkRows(player) {
    for (const row of this.board) {
      if (row.every(value => value === player)) return true;
    }
    return false;
  }

  move(row, col, player) {
    this.board[row][col] = player;

    if (this.checkRows(player) ||
      this.checkCols(player) ||
      this.checkDiagonal(player) ||
      this.checkAntiDiagonal(player)) {
      return player;
    } else {
      return 0;
    }
  }
}

class TicTacToeSlightlyOptimized {
  constructor(n) {
    this.n = n;
    this.board = new Array(n).fill().map(() => new Array(n).fill(0));
  }

  checkDiagonal(player) {
    for (let i = 0; i < this.n; i++) {
      if (this.board[i][i] !== player) return false;
    }
    return true;
  }

  checkAntiDiagonal(player) {
    for (let r = this.n - 1; r >= 0; r--) {
      if (this.board[r][(this.n - 1) - r] !== player) return false;
    }
    return true;
  }

  checkCol(player, c) {
    for (let r = 0; r < this.n; r++) {
      if (this.board[r][c] !== player) {
        break;
      }

      if (r === this.n - 1) {
        return true;
      }
    }
    return false;
  }

  checkRow(player, row) {
    if (this.board[row].every(value => value === player)) return true;
    return false;
  }

  move(row, col, player) {
    this.board[row][col] = player;

    if (this.checkRow(player, row) ||
      this.checkCol(player, col) ||
      this.checkDiagonal(player) ||
      this.checkAntiDiagonal(player)) {
      return player;
    } else {
      return 0;
    }
  }
}

class TicTacToeOptimized {
  constructor(n) {
    this.n = n;
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
  }
  move(row, col, player) {
    const currPlayer = player === 1 ? 1 : -1;
    this.rows[row] += currPlayer;
    this.cols[col] += currPlayer;

    if (row === col) this.diagonal += currPlayer;

    if (col === (this.n - 1 - row)) this.antiDiagonal += currPlayer;

    if (Math.abs(this.rows[row]) === this.n ||
      Math.abs(this.cols[col]) === this.n ||
      Math.abs(this.diagonal) === this.n ||
      Math.abs(this.antiDiagonal) === this.n) {
      return player;
    } else {
      return 0;
    }
  }
}


