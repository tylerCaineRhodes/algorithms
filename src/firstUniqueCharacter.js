export var firstUniqChar = function (s) {
  let storage = {};

  for (let letter of s) {
    !storage[letter] ? (storage[letter] = 1) : storage[letter]++;
  }

  for (let key in storage) {
    if (storage[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
