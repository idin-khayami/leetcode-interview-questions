nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
expectedOutput = [5,6,7,1,2,3,4]

var rotate = function (nums, k) {
  
  const numsLength = nums.length
  k = k % numsLength
  return  [...nums.slice(numsLength - k, numsLength), ...nums.slice(0, numsLength - k)];
}

console.log("output:", rotate(nums, k))
console.log("expectedOutput:", expectedOutput)
