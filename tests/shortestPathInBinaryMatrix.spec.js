import { shortestPathBinaryMatrix } from '../src/shortestPathInBinaryMatrix.js';

describe('shortest path in binary matrix', () => {
  it('returns shortest path for valid inputs', () => {
    expect(shortestPathBinaryMatrix([[0, 0, 0],[1, 1, 0],[1, 1, 0]])).toEqual(4);
    expect(shortestPathBinaryMatrix([[0, 1],[1, 0]])).toEqual(2);
  });

  it('returns shortest -1 for invalid inputs', () => {
    expect(shortestPathBinaryMatrix([[1, 1], [1, 0]])).toEqual(-1);
    expect(shortestPathBinaryMatrix([[0, 1], [1, -1]])).toEqual(-1);
  });
})
