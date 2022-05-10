import { backspaceCompare, backspaceCompareTotalUnit } from '../src/backspaceCompare';
describe('backspaceCompare', () => {
  it('should return true when both outputs result in an empty string', () => {
    expect(backspaceCompare('a#', 'x#y#z#')).toBe(true);
    expect(backspaceCompareTotalUnit('a#', 'x#y#z#')).toBe(true);
  });

  it('should return true when both outputs result in the same string', () => {
    expect(backspaceCompare('ab#cd', 'aczz##d')).toBe(true);
    expect(backspaceCompare('ab#z', 'az#z')).toBe(true);
    
    expect(backspaceCompareTotalUnit('ab#cd', 'aczz##d')).toBe(true);
    expect(backspaceCompareTotalUnit('ab#z', 'az#z')).toBe(true);
  });

  it('should return true when there are multiple backspaces spaced between characters', () => {
    expect(backspaceCompare('bxj##tw', 'bxo#j##tw')).toBe(true);
    expect(backspaceCompareTotalUnit('bxj##tw', 'bxo#j##tw')).toBe(true);
  })

  it('should ignore backspace characters when the string is empty', () => {
    expect(backspaceCompare('a###b', 'b')).toBe(true);
    expect(backspaceCompareTotalUnit('a###b', 'b')).toBe(true);
  });

  it('should return false when the strings are not equal', () => {
    expect(backspaceCompare('string', 'strings')).toBe(false);
    expect(backspaceCompare('abc#d', 'acc#c')).toBe(false);
    expect(backspaceCompare('Ab#z', 'az#z')).toBe(false);

    expect(backspaceCompareTotalUnit('string', 'strings')).toBe(false);
    expect(backspaceCompareTotalUnit('abc#d', 'acc#c')).toBe(false);
    expect(backspaceCompareTotalUnit('Ab#z', 'az#z')).toBe(false);
  });
});
