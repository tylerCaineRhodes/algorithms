import { validStartingCity } from '../src/validStartingCity';

describe('validStartingCity', () => {
  const distances = [5, 25, 15, 10, 15];
  const fuel = [1, 2, 1, 0, 3];
  const mpg = 10;

  it('should return the index of the correct city', () => {
    expect(validStartingCity(distances, fuel, mpg)).toBe(4);
  });
});
