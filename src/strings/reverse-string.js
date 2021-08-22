input= ["h","e","l","l","o"]
expectedOutput= ["o","l","l","e","h"]

//Way on:
var reverseStringWithReverse = function (s) {
  return s.reverse();
}

console.log('output in reverseString:', reverseStringWithReverse(input));
console.log('expectedOutput:', expectedOutput)




//Way two:
var reverseString = function (s) {
  let p1 = 0;
  let p2 = s.length -1;
  while (p1 < p2) {
    let t = s[p1];
    s[p1] = s[p2];
    s[p2] = t;
    p1 += 1;
    p2 -= 1;
  }
  return s;
}

console.log('output in reverseString:', reverseString(input));
console.log('expectedOutput:', expectedOutput)
