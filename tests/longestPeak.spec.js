import { longestPeak } from '../src/longestPeak';

describe('longestpeak', () => {
  it('returns longest peak of two', () => {
    expect(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])).toBe(6);
  });

  it('returns 0 when there is no peak or array is empty', () => {
    expect(longestPeak([1, 2, 3, 4, 5, 6, 10, 100, 1000])).toBe(0);

    expect(longestPeak([])).toBe(0);
  });
});
