var isPerfectSquare = function (num) {
  if(num < 2){
    return true;
  }
  let start = 1, end = num;
  
  while (start <= end){
    let midpoint = Math.floor((start + end) / 2);

    if ((midpoint * midpoint) === num){
      return true;
    }
    if((midpoint * midpoint) > num){
      end = midpoint - 1;
    }
    if((midpoint * midpoint) < num){
      start = midpoint + 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(9));
