/*
  The same problem as ./permutataionInString, except the input is reversed.
    s2 = str
    s1 = pattern

    1. find the length of the pattern (s1)
    2. iterate over the string (s2) as long as it's the length of the string - the length of the pattern
    3. get the substring of length of the pattern (s1)
    4. compare the substring to the pattern (s1) with a hash

  https://leetcode.com/problems/permutation-in-string/
*/

// O(n * m) brute force
export var checkInclusion = function (s1, s2) {
  const library1 = archive(s1);
  const s1_len = s1.length;
  const s2_len = s2.length;

  for(let i = 0; i <= s2_len - s1_len; i++){
    let sliceyBoy = s2.slice(i, i + s1_len);
    let library2 = archive(sliceyBoy);
    if(compare(library2, library1)){
      return true;
    }
  }
  return false;
};

const archive = (obj) => {
  const library = obj.split('').reduce((acc, key) => {
     acc[key] ? acc[key] += 1 : acc[key] = 1;
     return acc;
  }, {});
  return library;
};

const compare = (snippet, library1) => {
  for(let letter in snippet) {
    if(!library1[letter] || snippet[letter] < library1[letter]) return false;
  }
  return true;
};
