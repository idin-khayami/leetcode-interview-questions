board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
expectedOutput = true

var isValidSudoku = function(board) {
  let rows = []
  let columns = []
  let boxes = []
  for (let i = 0; i < 9; i++) {
    rows.push([]);
    columns.push([]);
    boxes.push([]);
  }

  for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board.length; j++) {
      const cell = board[i][j];
      if (cell !== ".") {
        if (rows[i].includes(cell)) {
          return false;
        }
        if (columns[j].includes(cell)) {
          return false;
        }
        rows[i].push(cell);
        columns[j].push(cell);

        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
        if (boxes[boxIndex].includes(cell)) {
          return false;
        }
        console.log(boxes, boxIndex, boxes[boxIndex], i , j)
        boxes[boxIndex].push(cell);
      }
    }
  }
  return true
};

console.log("output:", isValidSudoku(board));
console.log("expectedOutput:", expectedOutput);
