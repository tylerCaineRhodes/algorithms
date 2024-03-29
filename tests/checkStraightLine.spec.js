import { checkStraightLine } from '../src/checkStraightLine.js';

describe('check straight line', () => {
  it('returns true if colinear', () => {
   expect(checkStraightLine([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ])).toBe(true);
  });

  it('returns false if not colinear', () => {
    expect(
      checkStraightLine([
        [1, 1],
        [2, 2],
        [3, 4],
        [4, 5],
        [5, 6],
        [7, 7],
      ])
    ).toBe(false);
  });
});

