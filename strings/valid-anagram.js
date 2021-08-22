input1 = "anagram"
input2 = "nagaram"
expectedOutput = true

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')
  if (sortedS === sortedT) {
    return true
  }
  return false
};

console.log('output:', isAnagram(input1, input2));
console.log('expectedOutput:', expectedOutput);
