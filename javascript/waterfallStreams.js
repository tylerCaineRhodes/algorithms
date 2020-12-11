function waterfallStreams(array, source) {
  let rowAbove = array[0].slice();
  rowAbove[source] = -1;

  for (let row = 1; row < array.length; row++) {
    const currentRow = array[row].slice();

    for (let i = 0; i < rowAbove.length; i++) {
      const valueAbove = rowAbove[i];
      const hasWaterAbove = valueAbove < 0;
      const isBlockAtCurrentPosition = currentRow[i] === 1;
      if (!hasWaterAbove) continue;
      if (!isBlockAtCurrentPosition) {
        currentRow[i] += valueAbove;
        continue;
      }

      const splitWater = valueAbove / 2;
      let rightIdx = i;
      let leftIdx = i;

      while (rightIdx < rowAbove.length - 1) {
        rightIdx++;
        if (rowAbove[rightIdx] === 1) break;
        if (currentRow[rightIdx] !== 1) {
          currentRow[rightIdx] += splitWater;
          break;
        }
      }
      while (leftIdx > 0) {
        leftIdx--;
        if (rowAbove[leftIdx] === 1) break;
        if (currentRow[leftIdx] !== 1) {
          currentRow[leftIdx] += splitWater;
          break;
        }
      }
    }
    rowAbove = currentRow;
  }
  return rowAbove.map((num) => (num < 0 ? num * -100 : num));
}
