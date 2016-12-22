const makeBoard = (n) => {
  const res = [];
  for(let i = 0; i < n; i++) {
    res.push([]);
    for(let j = 0; j < n; j++) {
      res[i].push(0);
    }
  }
  return res;
};

const initialState = {
  matrix:  makeBoard(5),
};


const board = (state = initialState, action) => {
  return state;
};

export default board;