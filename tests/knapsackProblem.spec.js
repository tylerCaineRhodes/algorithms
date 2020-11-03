const { knapsackProblem } = require('../Javascript/dynamicProgramming/knapsackProblem');

describe('knapsack problem', () => {
  it('returns indeces and maxValue of knapsacks', () => {
    expect(
      knapsackProblem([
        [1, 2],
        [4, 3],
        [5, 6],
        [6, 7],
      ], 10)
    ).toStrictEqual([[1, 3], 10]);

    expect(
      knapsackProblem(
        [
          [465, 100],
          [400, 85],
          [255, 55],
          [350, 45],
          [650, 130],
          [1000, 190],
          [455, 100],
          [100, 25],
          [1200, 190],
          [320, 65],
          [750, 100],
          [50, 45],
          [550, 65],
          [100, 50],
          [600, 70],
          [240, 40],
        ],
        200
      )
    ).toStrictEqual([[3, 12, 14], 1500]);

    expect(
      knapsackProblem(
        [
          [465, 100],
          [400, 85],
          [255, 55],
          [350, 45],
          [650, 130],
          [1000, 190],
          [455, 100],
          [100, 25],
          [1200, 190],
          [320, 65],
          [750, 100],
          [50, 45],
          [550, 65],
          [100, 50],
          [600, 70],
          [255, 40],
        ],
        200
      )
    ).toStrictEqual([[7, 12, 14, 15], 1505]);
  });
});
