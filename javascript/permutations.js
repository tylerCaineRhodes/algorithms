function getPermutations(array) {
  if(!array.length) return [];

  let perms = [];
  const recurse = (creation, remainder) => {
    if(creation.length === array.length){
      perms.push(creation);
      return;
    }
    for(let i = 0; i < remainder.length; i++){
      let newRemainder = remainder.slice(0, i).concat(remainder.slice(i + 1));
      let newCreation = creation.concat(parseInt(remainder[i]));
      recurse(newCreation, newRemainder);
    }
  }
  recurse([], array);
  return perms;
}
console.log(getPermutations([1,2,3]))
