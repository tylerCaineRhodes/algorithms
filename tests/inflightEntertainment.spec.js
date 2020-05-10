const { isEqualFlightLength } = require('../javascript/inflightEntertainment.js');

describe('inflightEntertainment', () => {
  it('returns a boolean whether two movie runtimes have an exact sum of the time of flight', () => {
    expect(isEqualFlightLength(60, [ 20, 20, 20, 50])).toBe(false);
    expect(isEqualFlightLength(60, [ 20, 10, 15, 40])).toBe(true);
  });
});
