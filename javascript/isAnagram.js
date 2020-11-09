//O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const storageS = createHashmap(s);
  const storageT = createHashmap(t);

  for (let char in storageS) {
    if (storageS[char] !== storageT[char]) {
      return false;
    }
  }
  return true;
};

function createHashmap(chars) {
  const hashmap = {};
  for (let char of chars) {
    if (char in hashmap) {
      hashmap[char]++;
    } else {
      hashmap[char] = 1;
    }
  }
  return hashmap;
}

//o(n log n)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS === sortedT;
}