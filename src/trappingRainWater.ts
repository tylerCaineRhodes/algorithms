// brute force o(n)^2
export function trappingRainWater(array: number[]) {
  const rainWater = array.map((_val) => 0);

  for (let idx = 0; idx < array.length; idx++) {
    const pillarHeight = array[idx];

    const [maxLeft, maxRight] = getMaxBorderHeights(array, idx);
    const heightOfWater = Math.min(maxLeft, maxRight) - pillarHeight;

    rainWater[idx] = Math.max(heightOfWater, 0);
  }
  return rainWater.reduce((acc, val) => acc + val, 0);
}

function getMaxBorderHeights(array: number[], idx: number) {
  const maxLeft = Math.max(...array.slice(0, idx));
  const maxRight = Math.max(...array.slice(idx + 1));
  return [maxLeft, maxRight];
}

// dynamic programming o(n)
export function trappingRainWaterDynamic(array: number[]) {
  const maxLefts = getMaxLefts(array);
  const maxRights = getMaxRights(array);
  let amount = 0;

  for (let idx = 0; idx < array.length; idx++) {
    const pillarHeight = array[idx];

    const [maxLeft, maxRight] = [maxLefts[idx], maxRights[idx]];
    const heightOfWater = Math.min(maxLeft, maxRight) - pillarHeight;

    amount += Math.max(heightOfWater, 0);
  }
  return amount;
}

function getMaxLefts(array: number[]) {
  const maxLefts = array.map((_val) => 0);
  for (let i = 1; i < array.length; i++) {
    maxLefts[i] = Math.max(maxLefts[i - 1], array[i - 1]);
  }
  return maxLefts;
}

function getMaxRights(array: number[]) {
  const maxRights = array.map((_val) => 0);
  for (let i = array.length - 2; i >= 0; i--) {
    maxRights[i] = Math.max(maxRights[i + 1], array[i + 1]);
  }
  return maxRights;
}

// Using two pointers o(n)
export function trappingRainWaterWithPointers(array: number[]) {
  let maxLeft = 0;
  let maxRight = 0;

  let p1 = 0;
  let p2 = array.length - 1;

  let amount = 0;

  while (p1 < p2) {
    const [leftHeight, rightHeight] = [array[p1], array[p2]];
    // operate on the smaller pointer
    if (leftHeight < rightHeight) {
      leftHeight > maxLeft
        ? (maxLeft = leftHeight)
        : (amount += maxLeft - leftHeight);
      p1 += 1;
    } else {
      rightHeight > maxRight
        ? (maxRight = rightHeight)
        : (amount += maxRight - rightHeight);
      p2 -= 1;
    }
  }
  return amount;
}

// Using a stack o(n)
export function trappingRainWaterWithStack(array: number[]) {
  const stack = [];
  let amount = 0;
  let p = 0;

  while (p < array.length) {
    inner: while (stack.length && array[p] > array[stack[stack.length - 1]]) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const topOfStack = stack.pop()!;
      if (!stack.length) break inner;

      const distance = p - stack[stack.length - 1] - 1;
      const boundedHeight =
        Math.min(array[p], array[stack[stack.length - 1]]) - array[topOfStack];
      amount += distance * boundedHeight;
    }
    stack.push(p++);
  }
  return amount;
}
