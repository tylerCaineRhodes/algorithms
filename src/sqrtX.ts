/*
  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.

  Examples

  Input: x = 4
  Output: 2

  Input: x = 8
  Output: 2

  Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

  Input: x = 1
  Output: 1

  Input: x = 0
  Output: 0

  https://leetcode.com/problems/sqrtx
*/

export function mySqrt(int: number): number {
  if (int < 2) return int;

  let left = 2;
  let right = Math.floor(int / 2);

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const result = mid * mid;

    if (result === int) {
      return mid;
    }

    if (result > int) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

export function newtonsMethod(x: number): number {
  if (x < 2) return x;

  let oldGuess = x;
  let newGuess = (oldGuess + x) / oldGuess / 2.0;

  while (Math.abs(oldGuess - newGuess) >= 1) {
    oldGuess = newGuess;
    newGuess = (oldGuess + x / oldGuess) / 2.0;
  }
  return Math.floor(newGuess);
}
