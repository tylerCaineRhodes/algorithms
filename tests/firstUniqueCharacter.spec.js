const { firstUniqChar } = require('../javascript/algorithms/firstUniqueCharacter.js');

describe('firstUniqueChar', () => {
  it('acts as expected', () => {
    expect(firstUniqChar('leetcode')).toBe(0);
    expect(firstUniqChar('loveleetcode')).toBe(2);
    expect(firstUniqChar('aabbcc')).toBe(-1);
  });
});