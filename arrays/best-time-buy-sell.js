prices = [7,1,5,3,6,4]
expectedOutput = 7

const maxProfit = function(prices) {
  let buy = -1;
  let sell = 0;
  let profit = 0;
  prices.forEach((price, i) => {
    if ((price < prices[i + 1]) && buy === -1) {
      buy = price
    } else if(((price > prices[i + 1]) || (i === prices.length - 1)) && buy !== -1) {
      sell = price
      profit += sell - buy
      buy = -1
      sell = 0
    }
  })
  return profit
}

console.log("output:", maxProfit(prices))
console.log("expectedOutput:", expectedOutput)
