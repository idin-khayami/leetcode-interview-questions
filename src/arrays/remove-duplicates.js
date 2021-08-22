input = [1, 4, 2]
expectedOutput = 0

const removeDuplicates = nums => {
  if (nums.length === 0) return;
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
      j++
    }
    else j++
  }
  return i + 1;

}

console.log("output:", removeDuplicates(input))
console.log("expectedOutput:", expectedOutput)
