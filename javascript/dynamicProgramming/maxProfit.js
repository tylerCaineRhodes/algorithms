var maxProfit = function (prices) {
  let maxSell = 0;
  let minBuy = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minBuy) {
      minBuy = currentPrice;
    }
    maxSell = Math.max(maxSell, currentPrice - minBuy);
  }
  return maxSell;
};

