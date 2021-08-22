input = [0, 1, 0, 3, 12]
expectedOutput = [1,3,12,0,0]

var moveZeroes = function(nums) {
   let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }
  for (let i = count; i < nums.length; i++){
      nums[i] = 0;
  }
  return nums;
};

console.log("output:", moveZeroes(input));
console.log("expectedOutput", expectedOutput);

//way2:

var moveZeroes2 = function(nums) {
   let zeroesCount = 0;
  for (let i = 0; i < nums.length - zeroesCount; i++) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
      i--;
      zeroesCount+=1
    }
  }
  return nums;

};

console.log("output:", moveZeroes2(input));
console.log("expectedOutput", expectedOutput);
