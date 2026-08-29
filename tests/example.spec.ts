import { exampleFunc } from '../src/example.js';

describe('exampleFunc', () => {
  it('returns true if colinear', () => {
    expect(exampleFunc('hello')).toBe('hello');
  });
});
