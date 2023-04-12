import { findSubstring, findSubstringSimple } from "../src/smallestWindowContainingSubstring";

const context = describe;

describe('findSubstring', () => {
  context('when the entire string is the only match', () => {
    it('should return the entire string', () => {
      const str = 'aabdec';
      const pattern = 'abac';

      expect(findSubstring(str, pattern)).toEqual('aabdec');
      expect(findSubstringSimple(str, pattern)).toEqual('aabdec');
    });
  });

  context('when there are no matches', () => {
    it('should return an empty string', () => {
      const str = 'adcad';
      const pattern = 'abc';

      expect(findSubstring(str, pattern)).toEqual('');
      expect(findSubstringSimple(str, pattern)).toEqual('');
    })
  })

  context('when there are multiple matches', () => {
    it('should return the smallest substring', () => {
      expect(findSubstring('aabdec', 'abc')).toEqual('abdec');
      expect(findSubstringSimple('aabdec', 'abc')).toEqual('abdec');

      expect(findSubstring('abdbca', 'abc')).toEqual('bca');
      expect(findSubstringSimple('abdbca', 'abc')).toEqual('bca');

      expect(findSubstring('abdbca', 'abd')).toEqual('abd');
      expect(findSubstringSimple('abdbca', 'abd')).toEqual('abd');
    });
  });
});
