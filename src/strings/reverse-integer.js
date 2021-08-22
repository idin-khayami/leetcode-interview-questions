input = -123
expectedOutput = -321

var reverse = function (x) {
  const reverseNumber = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (reverseNumber > (2 ** 31) - 1 || reverseNumber < (-2) ** 31) {
    return  0;
  }
    return reverseNumber * Math.sign(x);
}

console.log('output:', reverse(input));
console.log('expectedOutput:', expectedOutput);

//Way2:
