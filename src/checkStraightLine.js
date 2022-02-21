export var checkStraightLine = function (coordinates) {
  if (coordinates.length < 3) {
    return true;
  }

  let slope =
    (coordinates[0 + 1][0] - coordinates[0][0]) /
    (coordinates[0 + 1][1] - coordinates[0][1]);

  for (let i = 1; i < coordinates.length - 1; i++) {
    if (
      coordinates[i][0] === coordinates[i + 1][0] ||
      coordinates[i][1] === coordinates[i + 1][1]
    ) {
      continue;
    }

    let xGap = coordinates[i + 1][0] - coordinates[i][0],
      yGap = coordinates[i + 1][1] - coordinates[i][1],
      currentSlope = xGap / yGap;

    if (currentSlope !== slope) {
      return false;
    }
  }
  return true;
};
