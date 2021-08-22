nums = [34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]
Output = [[-2,0,2],[-2,1,1]]

// [-4,-1,-1,0,1,2] => sum(-3)
// [-1,-1,0,1,2] => sum(1) => [-1,-1,0,1]=>sum(-1), [-1,-1,0,2]=>sum(0)
// [-1,0,1]=>sum(0)
// [-1,-1,0]=>sum(-2)*
// [-1,-1,2]=>sum(0)
/*
[-2,0,1,1,2] =>sum(2)
[-2,0,1,1] => sum(0)

/*
[
  -82, -70, -66, -49, -43, -29, -29, -14, -11, -6, -3,
   -3,   1,   2,  10,  12,  13,  15,  15,  17, 21, 26,
   26,  28,  28,  29,  31,  33,  34,  36,  43, 46, 46,
   47,  48,  49,  52,  55,  55,  56,  57,  61, 62, 65,
   69,  71,  74,  76,  77,  79,  83,  84,  86, 93, 94
]
*/
var threeSum = function(nums) {
  let finalResult = [];
  let processed = {};
  const calculateSum = (nums) => {
      return nums.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  }

  let queue = [];

  queue.push(nums.sort((a,b) => a - b));
  while (queue.length > 0) {
    let current = queue.pop();
    const currentSum = calculateSum(current);
    if (current.length === 3) {
      if (currentSum === 0) {
        finalResult.push(current)
      } else continue
    }
    let tmpLastStep = NaN;
    for (let i = 0; i < current.length; i++) {
      if ((current[i] >= currentSum/current.length && Math.sign(currentSum) === 1)
        || (current[i] <= currentSum/current.length && Math.sign(currentSum) === -1)
        || (Math.sign(currentSum) === 0)) {
        if (current[i] === tmpLastStep) {
          continue
        }
        tmpLastStep = current[i]
        const newState = current.filter((el, index) => index !== i)
        const sumNewState = calculateSum(newState);
        if (newState.filter(el => Math.sign(el) !== Math.sign(sumNewState)).length === 0) {
          continue
        }
        if (!processed[newState.toString()]) {
          queue.push(newState);
          processed[newState.toString()] = 1;
          continue
        }
        console.log(processed)
      }
    }
  }
  finalResult = finalResult.map(result => result.sort().toString());
  const newResult = [...new Set(finalResult)];
  return newResult.map(res => res.split(",").map(Number));
};

console.log("current output:", threeSum(nums));
console.log("output:", Output);
