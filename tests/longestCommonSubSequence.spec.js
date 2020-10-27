const { longestCommonSubsequence } = require('../Javascript/longestCommonSubsequence');

describe('longest common subsequence', () => {
  it('handles empty strings', () => {
    expect(longestCommonSubsequence('', '')).toStrictEqual([]);
    expect(longestCommonSubsequence('', 'ABCDEFG')).toStrictEqual([]);
  });

  it('handles stringified numbers', () => {
    expect(
      longestCommonSubsequence(
        '8111111111111111142',
        '222222222822222222222222222222433333333332'
      )
    ).toStrictEqual(['8', '4', '2']);
    expect(longestCommonSubsequence('', 'ABCDEFG')).toStrictEqual([]);
  });

  it('returns longest common substring between two strings', () => {
    expect(longestCommonSubsequence('ZXVVYZW', 'XKYKZPW')).toStrictEqual([
      'X',
      'Y',
      'Z',
      'W',
    ]);
    expect(longestCommonSubsequence('ABCDEFG', 'ABCDEFG')).toStrictEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
    ]);
    expect(longestCommonSubsequence('ABCDEFG', 'APPLES')).toStrictEqual([
      'A',
      'E',
    ]);
  });
});