input= [1,2,3,1]
expectedOutput = true

//Way 1
var containsDuplicate = function (nums) {
  nums = nums.sort();
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
      j++
    } else return true
  }
  return false
}

console.log("output:", containsDuplicate(input));
console.log("expectedOutput:", expectedOutput)

var containsDuplicate2 = function (nums) {
  let seenValues = [];
  for (let i = 0; i < nums.length; i++) {
    let myValue = nums[i];
    if (seenValues.indexOf(myValue) !== -1) {
      return true;
    }
    seenValues.push(myValue);
  }
  return false
}

console.log("output:", containsDuplicate2(input));
console.log("expectedOutput:", expectedOutput)
