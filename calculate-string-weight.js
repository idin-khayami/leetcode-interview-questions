/*
You are provided a string containing a list of positive integers separated by a space (" ").
Take each value and calculate the sum of its digits, which we call it's "weight".
Then return the list in ascending order by weight, as a string joined by a space.

For example 99 will have "weight" 18, 100 will have "weight"
1 so in the ouput 100 will come before 99.

Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let's consider them to be strings and not numbers:

100 is before 180 because its "weight" (1) is less than the one of 180 (9)
and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive integers and the list can be empty.

*/

const input = "56 65 74 100 99 68 86 180 90";
const output = "100 180 90 56 65 74 68 86 99";

function calculateWeight(str) {
  return str.split("").reduce((acc, curr) => {
    return Number(curr) + acc;
  }, 0);
}


function sortedVales(str) {
  const numbers = str.split(" ");
  const sortedItems = [...numbers].sort((a, b) => {
    const weightItemA = calculateWeight(a);
    const weightItemB = calculateWeight(b);
    if (weightItemA > weightItemB) {
      return 1;
    }

    if (weightItemB > weightItemA) {
      return -1;
    }
    return a.localeCompare(b);
  });
  return sortedItems.join(" ");
}

console.log('out:', sortedVales(input));
console.log('need:', output);


const input2 = "56 65 74 100 99 68 86 180 90";

function calculateWeight(str) {
  return str.split("").reduce((acc, curr) => {
    console.log(str.split(""), { Number(curr), acc });
    return Number(curr) + acc;
  }, 0);
}

console.log(calculateWeight(input2))
