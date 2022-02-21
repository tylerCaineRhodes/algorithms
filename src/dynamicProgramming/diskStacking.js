//O(n^2)
function diskStacking(disks) {
  //sort disks by height
  disks.sort((a, b) => a[2] - b[2]);
  //create an aux array init to heights
  const heights = disks.map((arr) => arr[2]);
  const sequences = new Array(disks.length);
  //iterate over sorted disks and check if previous are stackable
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i];
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j];
      if (isStackable(currentDisk, otherDisk)) {
        if (heights[i] < currentDisk[2] + heights[j]) {
          heights[i] = currentDisk[2] + heights[j];
          sequences[i] = j;
        }
      }
    }
  }
  const maxIdx = getMaxIdx(heights);
  return buildSequence(disks, sequences, maxIdx);
}

function isStackable(currentDisk, otherDisk) {
  const [currentWidth, currentDepth, currentHeight] = currentDisk;
  const [otherWidth, otherDepth, otherHeight] = otherDisk;
  return (
    currentWidth > otherWidth &&
    currentDepth > otherDepth &&
    currentHeight > otherHeight
  );
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}

function getMaxIdx(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num > array[max]) {
      max = i;
    }
  }
  return max;
}
