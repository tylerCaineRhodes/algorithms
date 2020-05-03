const { mergeRanges } = require('../javascript/algorithms/mergeRange.js');

describe('mergeRanges', () => {
  const input = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ],

  expected = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
  ];

  it('should return expected output', () => {
    expect(mergeRanges(input)).toStrictEqual(expected);
  });
});