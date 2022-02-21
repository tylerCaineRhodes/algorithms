import { exampleFunc } from '../src/example';

describe('exampleFunc', () => {
  it('returns true if colinear', () => {
    expect(exampleFunc('hello')).toBe('hello');
  });
});
