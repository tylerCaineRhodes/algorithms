/**
   n = 1
	 "1"
	 n = 2
	 "11"
	 n = 3
	 "21"
	 n = 4
	 "1211"
	 n = 5
	 "111221"
**/

function countAndSay(n) {
  if (n === 1) return '1';

  const prev = countAndSay(n - 1);
  const pairs = txtMapper(prev);
  return combinePairs(pairs);
}

function combinePairs(pairs) {
  let result = '';
  for (const [char, count] of pairs) {
    result += `${count}${char}`;
  }
  return result;
}

function txtMapper(txt) {
  const mappings = [];

  let curr = txt[0];
  let count = 1;
  for (let i = 1; i <= txt.length; i++) {
    if (txt[i] === curr) {
      count++;
    } else {
      mappings.push([curr, count]);
      curr = txt[i];
      count = 1;
    }
  }
  return mappings;
}

console.log(countAndSay(1)); // '1'
console.log(countAndSay(2)); // '11'
console.log(countAndSay(3)); // '21'
console.log(countAndSay(4)); // '1211'
console.log(countAndSay(5)); // '111221'
