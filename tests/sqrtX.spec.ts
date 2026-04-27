import { mySqrt, newtonsMethod } from '../src/sqrtX';

const context = describe;

describe('mySqrt', () => {
  context('with a perfect square', () => {
    it('returns the square root', () => {
      expect(mySqrt(4)).toEqual(2);
      expect(mySqrt(25)).toEqual(5);
    });

    it('returns the input if the square root is less than 2', () => {
      new Array(2)
        .fill(0)
        .map((_, idx) => idx)
        .forEach((val) => {
          expect(mySqrt(val)).toEqual(val);
        });
    });
  });

  context('without a perfect square', () => {
    it('returns the nearest rounded-down integer', () => {
      // The square root of 8 is 2.82842...,
      expect(mySqrt(8)).toEqual(2);
    });
  });
});

describe('newtonsMethod', () => {
  context('with a perfect square', () => {
    it('returns the square root', () => {
      expect(newtonsMethod(4)).toEqual(2);
      expect(newtonsMethod(25)).toEqual(5);
    });

    it('returns the input if the square root is less than 2', () => {
      new Array(2)
        .fill(0)
        .map((_, idx) => idx)
        .forEach((val) => {
          expect(newtonsMethod(val)).toEqual(val);
        });
    });
  });

  context('without a perfect square', () => {
    it('returns the nearest rounded-down integer', () => {
      // The square root of 8 is 2.82842...,
      expect(newtonsMethod(8)).toEqual(2);
    });
  });
});
