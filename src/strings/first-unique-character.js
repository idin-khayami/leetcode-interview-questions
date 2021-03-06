input = "idinkhanoom"
expectedOutput = 1


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1
}

console.log('output:', firstUniqChar(input));
console.log('expectedOutput:', expectedOutput);
