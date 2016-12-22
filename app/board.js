const Board = function(n) {
  this.matrix = this._makeBoard(n);
  this.size = n;
}

Board.prototype._makeBoard = function(n) {
  const res = [];
  for(let i = 0; i < n; i++) {
    res.push([]);
    for(let j = 0; j < n; j++) {
      res[i].push(0);
    }
  }
  return res;
};


Board.prototype.get = function(row, col) {
  if(row > this.size - 1 || col > this.size - 1 || row < 0 || col < 0 ) {
    return 0;
  }
  return this.matrix[row][col];
};

Board.prototype.set = function(row, col, val) {
  if(row > this.size - 1 || col > this.size - 1 || row < 0 || col < 0 ) {
    return;
  }
  return this.matrix[row][col] = val;
};

Board.prototype.step = function(verbose) {
  // Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
  // Any live cell with two or three live neighbors lives on to the next generation.
  // Any live cell with more than three live neighbors dies, as if by overpopulation.
  // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  let nextState = [];
  for(let i = 0; i < this.size; i++) {
    nextState.push([]);
    for(let j = 0; j < this.size; j++) {
      //sum up all neighbors
      const neighbors = this.get(i, j+1) + this.get(i, j-1) +
                       this.get(i+1, j) + this.get(i+1, j+1) + this.get(i+1, j-1) + 
                       this.get(i-1, j) + this.get(i-1, j+1) + this.get(i-1, j-1);

      //cell is live
      if(this.get(i,j)) {
        if(neighbors < 2 || neighbors > 3) {
          nextState[i][j] = 0;
        } else {
          nextState[i][j] = 1;
        }
      } else {
        if(neighbors === 3) {
          nextState[i][j] = 1;
        } else {
          nextState[i][j] = 0;
        }
      }
    }
  }
  if(verbose) {
    console.log(nextState);
  }
  this.matrix = nextState;
};

// // Small test
// const b = new Board(5);
// b.set(1,1,1);
// b.set(2,1,1);
// b.set(3,1,1);
// b.step(true);
// b.step(true);


export default Board;
