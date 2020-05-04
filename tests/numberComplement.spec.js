const { findComplement } = require('../javascript/algorithms/numberComplement.js');

describe('findComplement', () => {
  it('should return the integer value of flipped binary', () => {
    expect(findComplement(5)).toBe(2);
    expect(findComplement(1)).toBe(0);
  });
});
