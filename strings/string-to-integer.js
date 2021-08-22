input = "-91283472332"
expectedOutput = -2147483648

const myAtoi = function(s) {
  s = s.trim();
  let parsedString = '';
  let isNegative = false;
  if (s[0] === "-") {
    isNegative = true;
  }
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === "-" || s[i] === "+") && i === 0) {
      continue;
    }
    if((s[i] >= 0 && s[i] <= 9) && s[i] !== " ") {
      parsedString += s[i];
    } else {
      break;
    }
  }

  let number = Number(parsedString);
  if(isNegative) {
       number = number * -1;
    }
    if(number> (2**31) - 1) {
        return (2**31) -1
    }
    if(number < (-2)**31) {
        return (-2)**31
    }
    return number;
};

console.log('output:', myAtoi(input));
console.log('expectedOutput:', expectedOutput);
