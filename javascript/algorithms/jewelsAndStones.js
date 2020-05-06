var numJewelsInStones = function (J, S) {
  let count = 0, storage = {}

  for (let i = 0; i < J.length; i++) {
    storage[J[i]] = true;
  }

  for (let i = 0; i < S.length; i++) {
    if (storage[S[i]]) {
      count += 1;
    }
  }
  return count;
};


module.exports = { numJewelsInStones };
