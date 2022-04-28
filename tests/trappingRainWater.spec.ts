import {
  trappingRainWater,
  trappingRainWaterDynamic,
  trappingRainWaterWithPointers,
  trappingRainWaterWithStack,
} from '../src/trappingRainWater';

describe('trappingRainWater', () => {
  let inputArray: number[];

  it('returns the correct summed amount', () => {
    inputArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
    expect(trappingRainWater(inputArray)).toBe(8);
    expect(trappingRainWaterDynamic(inputArray)).toBe(8);
    expect(trappingRainWaterWithPointers(inputArray)).toBe(8);
    expect(trappingRainWaterWithStack(inputArray)).toBe(8);
  });

  it('returns 0 when the array is empty', () => {
    inputArray = [];
    expect(trappingRainWater(inputArray)).toBe(0);
    expect(trappingRainWaterDynamic(inputArray)).toBe(0);
    expect(trappingRainWaterWithPointers(inputArray)).toBe(0);
    expect(trappingRainWaterWithStack(inputArray)).toBe(0);
  });
  it('returns zero when there are less than 3 elements', () => {
    inputArray = [3];
    expect(trappingRainWater(inputArray)).toBe(0);
    expect(trappingRainWaterDynamic(inputArray)).toBe(0);
    expect(trappingRainWaterWithPointers(inputArray)).toBe(0);
    expect(trappingRainWaterWithStack(inputArray)).toBe(0);
  });
  it('returns zero when no rainwater can be trapped', () => {
    inputArray = [3, 4, 3];
    expect(trappingRainWater(inputArray)).toBe(0);
    expect(trappingRainWaterDynamic(inputArray)).toBe(0);
    expect(trappingRainWaterWithPointers(inputArray)).toBe(0);
    expect(trappingRainWaterWithStack(inputArray)).toBe(0);
  });
});
