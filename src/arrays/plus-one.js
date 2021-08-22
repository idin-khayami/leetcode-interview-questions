input = [9]
expectedOutput = [1, 0]

var plusOne = function(digits) {
  if (!digits.length) return
  digits[digits.length - 1] += 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 9) {
      digits[i] = digits[i] - 10;
      digits[i - 1] += 1;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits
};

console.log("out:", plusOne(input));
console.log("expectedOutput:", expectedOutput);
