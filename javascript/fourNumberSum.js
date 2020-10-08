function fourNumberSum(array, targetSum) {
  //init result
  const quadruplets = [];
  //init hash table
  const pairs = {};
  //iterate over array starting with 1 and ending before last elem
  for (let i = 1; i < array.length - 1; i++) {
    //loop to find if current difference exists in result starting at i + 1.
    //if it does, iterate over each pair in obj and push to result
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      let diff = targetSum - sum;

      if (diff in pairs) {
        for (let pair of pairs[diff]) {
          quadruplets.push([...pair, ...[array[i], array[j]]]);
        }
      }
    }
    for (let k = 0; k < i; k++) {
      //loop at 0 to i and push to hash table if doesn't exist.
      let sum = array[k] + array[i];
      if (!pairs[sum]) {
        pairs[sum] = [[array[k], array[i]]];
      } else {
        //if exists, push pair to array at that key
        pairs[sum].push([array[k], array[i]]);
      }
    }
  }
  //return result
  return quadruplets;
}
