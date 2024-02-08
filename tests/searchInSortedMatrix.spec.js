import { searchInSortedMatrix } from '../src/searchInSortedMatrix.js';

const context = describe;

describe('searchInSortedMatrix', () => {
  context('when the target exists in the matrix', () => {
    context('when the dimensions of the matrix match', () => {
      const matrix = {
        matrix: [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30],
        ],
        target: 5,
      };
      it('returns correct row and col for target', () => {
        expect(searchInSortedMatrix(matrix)).toStrictEqual([1, 1]);
      });
    });

    context('when the dimensions of the matrix do not match', () => {
      const test1 = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 44,
      };

      const test2 = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 1,
      };

      const test3 = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 2,
      };

      const test4 = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 4,
      };

      const test5 = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 15,
      };

      const test6 = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 12,
      };

      const test7 = {
        matrix: [[-1, 3]],
        target: 3,
      };

      const test8 = {
        matrix: [[-1]],
        target: -1,
      };

      it('returns the correct row and col for target', () => {
        expect(searchInSortedMatrix(test1)).toStrictEqual([3, 3]);
        expect(searchInSortedMatrix(test2)).toStrictEqual([0, 0]);
        expect(searchInSortedMatrix(test3)).toStrictEqual([1, 0]);
        expect(searchInSortedMatrix(test5)).toStrictEqual([0, 4]);
        expect(searchInSortedMatrix(test4)).toStrictEqual([0, 1]);
        expect(searchInSortedMatrix(test6)).toStrictEqual([0, 3]);
        expect(searchInSortedMatrix(test7)).toStrictEqual([0, 1]);
        expect(searchInSortedMatrix(test8)).toStrictEqual([0, 0]);
      });

      context('when the target does not exist in the matrix', () => {
        const matrix = {
          matrix: [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004],
          ],
          target: 43,
        };
        it('returns [-1, -1]', () => {
          expect(searchInSortedMatrix(matrix)).toStrictEqual([-1, -1]);
        });
      });
    });

    context('when the target does not exist in the matrix', () => {
      const matrix = {
        matrix: [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        target: 43,
      };
      it('returns [-1, -1]', () => {
        expect(searchInSortedMatrix(matrix)).toStrictEqual([-1, -1]);
      });
    });
  });
});
