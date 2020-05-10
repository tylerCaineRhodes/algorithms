const { wordCloud } = require('../javascript/wordCloud.js');

describe('wordCloud', () => {
  let testString ='After beating the eggs, Dana read the next step:Add milk and eggs, then add flour and sugar.',
    eggsValues = wordCloud(testString).get('eggs').val,
    andValues = wordCloud(testString).get('and').val,
    milkValues = wordCloud(testString).get('milk').val;

  it('should return a map where the keys are words and values are number of times it appears', () => {
    expect(wordCloud(testString).has('eggs')).toBe(true);
    expect(eggsValues).toBe(2);
    expect(andValues).toBe(2);
    expect(milkValues).toBe(1);
  });
});
