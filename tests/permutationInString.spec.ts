import { findPermutation, findPermutationSimple, findPermutationII } from '../src/permutationInString';

const context = describe;

describe('findPermatation', () => {
  context('when it does not contain a permtation', () => {
    it('returns false', () => {
      expect(findPermutationSimple('odicf', 'dc')).toBe(false);
      expect(findPermutation('odicf', 'dc')).toBe(false);
      expect(findPermutationII('odicf', 'dc')).toBe(false);
    });

  });

  context('when it does contain a permtation', () => {
    it('returns false', () => {
      expect(findPermutationSimple('oidbcaf', 'abc')).toBe(true);
      expect(findPermutationSimple('bcdxabcdy', 'bcdyabcdx')).toBe(true);
      expect(findPermutationSimple('aaacb', 'abc')).toBe(true);

      expect(findPermutation('oidbcaf', 'abc')).toBe(true);
      expect(findPermutation('bcdxabcdy', 'bcdyabcdx')).toBe(true);
      expect(findPermutation('aaacb', 'abc')).toBe(true);

      expect(findPermutationII('oidbcaf', 'abc')).toBe(true);
      expect(findPermutationII('bcdxabcdy', 'bcdyabcdx')).toBe(true);
      expect(findPermutationII('aaacb', 'abc')).toBe(true);
    });
  });
});
