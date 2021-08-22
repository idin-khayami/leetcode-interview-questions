nums =[3,2,3]
target = 6
expectedOutput = [0, 2]

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
};

console.log("output:", twoSum(nums, target));
console.log("expectedOutput", expectedOutput);
