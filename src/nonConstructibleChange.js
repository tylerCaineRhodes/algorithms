function nonConstructibleChange(coins) {
  coins.sort((a,b) => a - b);
  let change = 0;
  coins.forEach((coin) => {
    if(coin > change + 1) return change + 1;
    change += coin;
  })
  return change + 1;
}