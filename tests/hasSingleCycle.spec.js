const { hasSingleCycle, hasSingleCycle_AuxArray } = require('../Javascript/hasSingleCycle');

describe('has single cycle', () => {
  it('should return true for an array representing a single cycle', () => {
    expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).toBe(true);
    expect(hasSingleCycle_AuxArray([2, 3, 1, -4, -4, 2])).toBe(true);
  });

  it('should return false for an array not representing a single cycle', () => {
    expect(hasSingleCycle([0, 1, 1, 1, 1])).toBe(false);
    expect(hasSingleCycle_AuxArray([0, 1, 1, 1, 1])).toBe(false);
  });
});
