var frequencySort = function(s) {
  let collection = {};
  let result = '';

  for(let letter of s){
    if(collection[letter]){
      collection[letter]++
    } else {
      collection[letter] = 1;
    }
  }

  let sorted = Object.keys(collection).sort((a, b) => collection[b] - collection[a]);

  for(let letter of sorted){
    let count = 0;
    while(count < collection[letter]){
      result += letter ;
      count++
    }
  }
  return result;
};

console.log(frequencySort('tree'))