function apartmentHunting(blocks, reqs) {
  const maxDistancesAtBlocks = blocks.map((val) => -Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReqDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetween(i, j)
          );
        }
      }
      maxDistancesAtBlocks[i] = Math.max(
        maxDistancesAtBlocks[i],
        closestReqDistance
      );
    }
  }
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function apartmentHuntingII(blocks, reqs) {
  const minDistancesFromBlocks = reqs.map((req) =>
    getMinDistances(blocks, req)
  );
  /*
	reqs = ['gym', school, 'store']
	minDistancesFromBlocks = 
[ 
	[ 1, 0, 0, 1, 2 ], --represents gyms
	[ 0, 1, 0, 0, 0 ], --represents school
	[ 4, 3, 2, 1, 0 ]  --represents store
]
	each idx at array reprents block at that idx
	*/
  const maxDistancesFromBlocks = getMaxDistancesAtBlocks(
    blocks,
    minDistancesFromBlocks
  );
  return getIdxAtMinValue(maxDistancesFromBlocks);
}

function getMinDistances(blocks, req) {
  const minDistances = blocks.map((val) => 0);
  let closestReqIdx = Infinity;
  //pass left and get min distance for req at index i
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = distanceBetween(i, closestReqIdx);
  }
  //pass right and get min distance for req at index i
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = Math.min(
      minDistances[i],
      distanceBetween(i, closestReqIdx)
    );
  }
  return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
  const maxDistancesAtBlocks = blocks.map((val) => 0);
  for (let i = 0; i < blocks.length; i++) {
    //groups all distances per index
    const minDistancesAtBlock = minDistancesFromBlocks.map(
      (distances) => distances[i]
    );
    // console.log({minDistancesFromBlocks, minDistancesAtBlock})
    maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
  }
  return maxDistancesAtBlocks;
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}

function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}