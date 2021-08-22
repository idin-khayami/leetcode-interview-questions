nums1 = [1, 2, 2, 1]
nums2 = [2, 2]
expectedOutput= [2,2]

var intersect = function(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    // if (nums1.indexOf(nums2[i]) !== -1) {
    // instead of above we can using includes
    if(nums1.includes(nums2[i])) {
      result.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    } 
  }
  return result
};


console.log("output:", intersect(nums1, nums2));
console.log("expectedOutput", expectedOutput)
