input = [2, 2, 1]
expectedOutput = 1

var singleNumber = function (nums) {
  const sortNumbers = nums.sort();
  for (let i = 0; i < sortNumbers.length; i+=2) {
    if (sortNumbers[i] !== sortNumbers[i + 1]) {
      return sortNumbers[i]
    }
  }
}

console.log("output:", singleNumber(input));
console.log("expectedOutput:", expectedOutput);


//Way 2


var singleNumber2 = function (nums) {
  const count = {};
  nums.forEach(num => {
    if (!count[num]) {
      count[num] = 1
    } else {
      count[num]++;
    }
  })
  for (const [key, value] of Object.entries(count)) {
    if (value === 1) { return key;}
  }
}

console.log("output2:", singleNumber2(input));
console.log("expectedOutput:", expectedOutput);
