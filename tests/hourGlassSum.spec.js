const {hourglassSum} = require('../javascript/hourGlassSum.js');

describe('hourGlassSum', () => {

  let input1 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  input2 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];

  it('returns the highest sum in an hourglass pattern', () => {
    expect(hourglassSum(input1)).toBe(7)
  });

  it('accounts for negative integers', () => {
    expect(hourglassSum(input2)).toBe(28);
  });
});
