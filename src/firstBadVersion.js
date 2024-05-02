var solution = function (isBadVersion) {
  return function (n) {
    let start = 0, end = n, firstBadVersion;
    while (start < end) {
      let midpoint = Math.floor((start + end) / 2);
      if (!isBadVersion(midpoint)) {
        start = midpoint + 1;
      } else {
        end = midpoint;
      }
    }
    firstBadVersion = start;
    return firstBadVersion;
  };
};

