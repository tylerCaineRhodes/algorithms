const { findMedianSortedArrays } = require('../javascript/algorithms/medianOfTwoSortedArrays.js');

describe('medianOfTwoSortedArrays', () => {
  it('returns correct medium for even and odd sums of numbers', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });
});
