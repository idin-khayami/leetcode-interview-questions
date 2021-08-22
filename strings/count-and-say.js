input = 4
expectedOutput = "1211"

var countAndSay = function(n) {
  const str = [...Array(n-1)];
  return str.reduce((ac, cr) => {
    return findCountAndSay(ac);
  }, "1");
};

const findCountAndSay = function(str) {
  let temp = 1;
  let finalResult = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      temp++;
    } else {
      finalResult += (temp + str[i]);
      temp = 1;
    }
  }
  return finalResult;
}

console.log('output:', countAndSay(input));
console.log('expectedOutput:', expectedOutput);
