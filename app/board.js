const Board = function(n) {
  this.matrix = makeBoard(n);
}

const makeBoard = (n) => {
  var res = [];
  for(var i = 0; i < n; i++) {
    res.push([]);
    for(var j = 0; j < n; j++) {
      res[i].push(0);
    }
  }
  return res;
};


// export default Board;