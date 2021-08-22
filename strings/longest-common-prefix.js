input = ["flower","flow","flight"]
expectedOutput = "fl"

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  for (let i = 0; i < strs[0].length; i++) {
    if (!strs.every(str => str[i] === strs[0][i])) {
      return strs[0].slice(0,i);
    }
  }
  return strs[0]
}

console.log("output:", longestCommonPrefix(input));
console.log("expectedOutput:", expectedOutput)
