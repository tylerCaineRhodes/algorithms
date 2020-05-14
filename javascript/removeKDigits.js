var removeKdigits = function (num, k) {
  if (num.length === k) {
    return '0';
  }
  let low = num.slice();
  let deleted = 0;

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < low.length; j++) {
      if (low[j] > low[j + 1]) {
        low = low.slice(0, j) + low.slice(j + 1);
        deleted++;
        break;
      }
    }
  }

  while(low[0] === '0'){
    low = low.slice(1)
  }

  low = low.slice(0, (low.length - (k - deleted)))

  if(low.length === 0){
    return '0';
  }
  return low;
};

console.log(removeKdigits('5337', 2));
console.log(removeKdigits('1432219', 3));
console.log(removeKdigits('10200', 1));
console.log(removeKdigits('10', 0));
