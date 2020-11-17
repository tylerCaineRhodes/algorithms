const { canConstruct } = require('../javascript/ransomNote.js');

describe('Ransom Note', () => {
  it('returns expected boolean value', () => {
    expect(canConstruct('a', 'b')).toBe(false);
    expect(canConstruct('aa', 'ab')).toBe(false);
    expect(canConstruct('aa', 'aab')).toBe(true);
  });

  it('works on longer sets of strings', () => {
    expect(canConstruct('catsarecool', 'aatsolocercf')).toBe(true);
    expect(canConstruct('catsarecool', 'atsolocercf')).toBe(false);
  });
  
  it('returns true for an empty string', () => {
    expect(canConstruct('', '')).toBe(true);
  });
});
