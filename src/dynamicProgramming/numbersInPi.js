function numbersInPi(pi, numbers) {
  //dump numbers in numbers table
  const numbersTable = {};
  for (let num of numbers) {
    numbersTable[num] = true;
  }
  //get min spaces
  const minSpaces = getMinSpaces(pi, numbersTable);
  console.log(minSpaces);
  //if min spaces is Infinity, return -1. Else, return min spaces
  return minSpaces !== Infinity ? minSpaces : -1;
}

function getMinSpaces(pi, numbersTable, cache = {}, idx = 0) {
  //if starting index is out of bounds, return -1 to backtrack
  if (idx === pi.length) return -1;
  //if we've already calculated the min spaces at this idx, return
  if (idx in cache) {
    return cache[idx];
  }
  //init min spaces
  let minSpaces = Infinity;

  for (let i = idx; i < pi.length; i++) {
    //calculate the current prefix
    const prefix = pi.slice(idx, i + 1);
    //if the current prefix matches one of the numbers in our collection
    if (prefix in numbersTable) {
      //find suffix spaces
      const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
      //set min spaces to current min spaces, or suffix + 1
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
    }
  }
  //add our current minSpaces to cache and return min value
  cache[idx] = minSpaces;
  return cache[idx];
}
