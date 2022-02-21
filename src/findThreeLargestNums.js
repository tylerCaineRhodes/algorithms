function findThreeLargestNumbersI(array) {
  const largest = [-Infinity, -Infinity, -Infinity];
  for (let num of array) {
    if (num >= largest[2]) {
      [largest[2], largest[1], largest[0]] = [num, largest[2], largest[1]];
    } else if (num >= largest[1]) {
      [largest[1], largest[0]] = [num, largest[1]];
    } else if (num >= largest[0]) {
      largest[0] = num;
    }
  }
  return largest;
}

function findThreeLargestNumbersII(array) {
  const largest = [-Infinity, -Infinity, -Infinity];
  for (let num of array) {
    replaceAndShift(largest, num);
  }
  return largest;
}

const replaceAndShift = (largest, num) => {
  if (num >= largest[2]) {
    [largest[2], largest[1], largest[0]] = [num, largest[2], largest[1]];
  } else if (num >= largest[1]) {
    [largest[1], largest[0]] = [num, largest[1]];
  } else if (num >= largest[0]) {
    largest[0] = num;
  }
};
