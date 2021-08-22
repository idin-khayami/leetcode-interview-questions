heystack = "hello", needle = "ll"
expectedOutput = 2

var strStr = function (haystack, needle) {

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      // let j = 0;
      // while (haystack[i + j] === needle[j]) {
      //   if (j === needle.length - 1) {
      //     return i
      //   }
      //   j++
      // }
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  if (needle.length === 0 || needle === haystack) {
    return 0;
  }
  return -1;
}


console.log('output:', strStr(heystack, needle));
console.log('expectedOutput:', expectedOutput);
