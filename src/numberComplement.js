var findComplement = function (num) {
  let complement = '';
  num = num.toString(2);

  for(let bit of num){
    if(bit === '1'){
      complement += 0;
    } else {
      complement += 1;
    }
  }

  return parseInt(complement, 2);
};

export { findComplement };
