const { checkInclusion } = require('../javascript/checkInclusion.js');

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
console.log(checkInclusion('adc', 'dcda'));
console.log(checkInclusion('abc', 'bbbca'));

describe('check Inclusion', () => {
  it('returns false if contains letter but isn\'t an anagram', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  });
  it('returns true if contains an anagram', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
    expect(checkInclusion('adc', 'dcda')).toBe(true);
    expect(checkInclusion('abc', 'bbbca')).toBe(true);
  });
});
