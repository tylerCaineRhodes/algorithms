const everyComboArray = (...args) => {
  let combined = [], n = args.length, answer = [];

  combined = combined.concat(...args).join('')

  const buildABear = (bear, remainder) => {
    if(bear.length === n){
      answer.push(bear);
      return;
    }
    for(let i = 0; i < remainder.length; i++){
      buildABear(bear + remainder[i], remainder.slice(0, i) + remainder.slice(i+1));
    }
  }
  buildABear('', combined);
  return answer;
}

var array1 = ['I'];
var array2 = ['A', 'B'];
var array3 = ['X', 'Y'];
var array4 = ['t', 'r', 'q'];

console.log(everyComboArray(array1, array2, array3, array4))