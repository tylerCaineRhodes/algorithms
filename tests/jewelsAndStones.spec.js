import { numJewelsInStones } from '../src/jewelsAndStones.js';

describe('jewels and stones', () => {
  const answer1 = numJewelsInStones('Aa', 'AabbbbbA'),
    answer2 = numJewelsInStones('AaB', 'AabbBbbAaAaA');

  it('does a thing', () => {
    expect(answer1).toBe(3);
    expect(answer1).not.toBe(2);
    expect(answer2).toBe(8);
  });
});
