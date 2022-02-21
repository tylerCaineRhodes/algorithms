export function hasSingleCycle_AuxArray(array) {
  const auxArray = new Array(array.length).fill(0);
  let index = 0;
  let nodesVisited = 0;
  while (nodesVisited < array.length) {
    if (nodesVisited > 0 && index === 0) return false;
    auxArray[index]++;
    nodesVisited += 1;
    index = getNextIndex(array, index);
  }
  for (let nums of auxArray) {
    if (nums === 0 || nums > 1) return false;
  }
  return true;
}

export function hasSingleCycle(array) {
  let index = 0;
  let nodesVisited = 0;
  while (nodesVisited < array.length) {
    if (nodesVisited > 0 && index === 0) return false;
    nodesVisited += 1;
    index = getNextIndex(array, index);
  }
  return index === 0;
}

function getNextIndex(array, index) {
  let jumpVal = array[index];
  let newIndex = (index + jumpVal) % array.length;
  return newIndex >= 0 ? newIndex : newIndex + array.length;
}

