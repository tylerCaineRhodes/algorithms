var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  if(s === p) return [0];
  let resultIndex = [];
  let collectionP = counter(p);

  for (let i = 0; i <= s.length - p.length; i++) {
    let currentCollection = Object.assign({}, collectionP);
      let counter = 0;
      while (counter < p.length) {
        if (currentCollection[s[i + counter]]) {
          if (counter + 1 === p.length) {
            resultIndex.push(i);
            break;
          }
          if (currentCollection[s[i + counter]] === 1) {
            delete currentCollection[s[i + counter]];
          } else {
            currentCollection[s[i + counter]] -= 1;
          }
          counter++;
        } else {
          break;
        }
      }
  }
  return resultIndex;
};

const counter = (str) => {
  let collection = {};
  for (let letter of str) {
    if (collection[letter]) {
      collection[letter] += 1;
    } else {
      collection[letter] = 1;
    }
  }
  return collection;
};


let tests = [
  findAnagrams('aacb', 'abc'),
  findAnagrams('abab', 'ab'),
  findAnagrams('cbaebabacd', 'abc'),
];

console.log(...tests)
