import { rotateMatrix } from '../src/rotateMatrix.js';

describe('rotateMatrix', () => {
  describe('rotating an empty matrix', () => {
    it('returns the input', () => {
      expect(
        rotateMatrix({ matrix: [], shouldRotateClockwise: true })
      ).toStrictEqual([]);
    });
  });

  describe('rotating a matrix with on empty row', () => {
    it('returns the input', () => {
      expect(
        rotateMatrix({ matrix: [[]], shouldRotateClockwise: true })
      ).toStrictEqual([[]]);
    });
  });

  describe('rotating an n x n matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'a', 'b', 'c'],
      ['d', 'e', 'f', 'g'],
    ];
    describe('rotating clockwise', () => {
      const expectedClockwise = [
        ['d', 9, 5, 1],
        ['e', 'a', 6, 2],
        ['f', 'b', 7, 3],
        ['g', 'c', 8, 4],
      ];

      it('rotates the matrix clockwise', () => {
        expect(
          rotateMatrix({ matrix, shouldRotateClockwise: true })
        ).toStrictEqual(expectedClockwise);
      });
    });

    describe('rotating counter-clockwise', () => {
      const expectedCounterClockwise = [
        [4, 8, 'c', 'g'],
        [3, 7, 'b', 'f'],
        [2, 6, 'a', 'e'],
        [1, 5, 9, 'd'],
      ];

      it('rotates the matrix counter-clockwise', () => {
        expect(
          rotateMatrix({ matrix, shouldRotateClockwise: false })
        ).toStrictEqual(expectedCounterClockwise);
      });
    });
  });

  describe('rotating an n x m matrix', () => {
    const matrix = [
      [1, 2],
      [5, 6],
      [9, 'a'],
      ['d', 'e'],
    ];

    describe('rotating clockwise', () => {
      const expectedClockwise = [
        ['d', 9, 5, 1],
        ['e', 'a', 6, 2],
      ];

      it('rotates the matrix clockwise', () => {
        expect(
          rotateMatrix({ matrix, shouldRotateClockwise: true })
        ).toStrictEqual(expectedClockwise);
      });
    });

    describe('rotating counter-clockwise', () => {
      const expectedCounterClockwise = [
        [2, 6, 'a', 'e'],
        [1, 5, 9, 'd'],
      ];

      it('rotates the matrix counter-clockwise', () => {
        expect(
          rotateMatrix({ matrix, shouldRotateClockwise: false })
        ).toStrictEqual(expectedCounterClockwise);
      });
    });
  });
});
