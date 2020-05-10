const { findJudge } = require('../javascript/algorithms/findJudge.js');

describe('find judge', () => [
  it('returns -1 when there is no judge', () => {
    expect(findJudge(3, [[1, 2],[2, 3]])).toBe(-1);
    expect(findJudge(3, [[1, 3],[2, 3],[3, 1]])).toBe(-1);
    expect(findJudge(3, [[1, 3],[2, 3],[3, 1]])).toBe(-1);
  }),

  it('returns the number that qualifies as judge', () => {
    expect(findJudge(3, [[1, 3],[2, 3]])).toBe(3);
    expect(findJudge(4, [[1, 2],[1, 3],[2, 1],[2, 3],[1, 4],[4, 3],[4, 1]])).toBe(3);
    expect(findJudge(2, [[1, 2]])).toBe(2);
  })
]);
