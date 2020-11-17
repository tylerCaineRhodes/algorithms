const { mergeSortedArrays } = require('../javascript/sortingAlgos/mergeSortedArrays.js');

describe('mergeSortedArrays', () => {
  const myArray = [3, 4, 6, 10, 11, 15], someoneElseArray = [1, 5, 8, 12, 14, 19];

  it('sorts both arrays', () => {
    expect(mergeSortedArrays(myArray, someoneElseArray)).toStrictEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]);
  });
});
