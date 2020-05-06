const { myAtoi } = require('../javascript/algorithms/stringToInteger.js');

describe('myAtoi', () => {
  it('should parse a regular string into a number', () => {
    expect(myAtoi('42')).toBe(42);
  });

  it('should account for negative numbers', () => {
    expect(myAtoi('-5')).toBe(-5);
  });

  it('should ignore spaces before numerical digit or a +/- sign', () => {
    expect(myAtoi('    -42')).toBe(-42);
  });

  it('should return zero if type has been declared more than once', () => {
    expect(myAtoi('--42')).toBe(0);
    expect(myAtoi('++42')).toBe(0);
    expect(myAtoi('+-42')).toBe(0);
  });
  
  it('should return zero if first non-white character isn\'t numerical', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });

  it('should return (-2**31) since negative number is out of range', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648);
  });

  it('should return ((2**31) - 1) since positive number is out of range', () => {
    expect(myAtoi('9999991283472332')).toBe(2147483647);
  });
});
