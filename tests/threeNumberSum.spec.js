import { threeNumberSum } from '../src/threeNumSum.js';

describe('three number sum', () => {
  it('should return expected tripets', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toStrictEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });
  it('should return expected tripets', () => {
    expect(threeNumberSum([1, 2, 3], 6)).toStrictEqual([[1, 2, 3]]);
  });
  it('should return expected tripets', () => {
    expect(threeNumberSum([1, 2, 3], 7)).toStrictEqual([]);
  });
  it('should return expected tripets', () => {
    expect(threeNumberSum([8, 10, -2, 49, 14], 57)).toStrictEqual([
      [-2, 10, 49],
    ]);
  });
});
