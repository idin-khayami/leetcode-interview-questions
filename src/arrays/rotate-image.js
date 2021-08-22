matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
expectedOutput = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

var rotate = function (matrix) {
  let myNewImage = [];
  for (let k = 0; k < matrix.length; k++) {
    myNewImage.push([])
  }
  for (let j = matrix.length -1; j >= 0; j--) {
    for (let i = 0; i < matrix.length; i++) {
      myNewImage[i][matrix.length-1 - j] = matrix[j][i];
    }
  }
  return myNewImage;
};


console.log("output:", rotate(matrix));
console.log("expectedOutput:", expectedOutput);

//way2:

var rotate2 = function (matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
    matrix[i] = matrix[i].reverse();
  }
  return matrix
};


console.log("output2:", rotate2(matrix));
console.log("expectedOutput:", expectedOutput);
