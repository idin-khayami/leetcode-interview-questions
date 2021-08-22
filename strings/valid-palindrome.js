input = "A man, a plan, a canal: Panama"
expectedOutput = true

const isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) return false
    
    rightIndex--
    leftIndex++
  }
  return true
};

console.log('output:', isPalindrome(input));
console.log('expectedOutput:', expectedOutput);
