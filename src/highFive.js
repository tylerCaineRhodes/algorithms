var highFive = function (items) {
  let result = [],
    storage = {};

  for (let i = 0; i < items.length; i++) {
    //check to see if student exists,
    if (storage[items[i][0]] === undefined) {
      storage[items[i][0]] = [items[i][1]];
      continue;
    } else {
      storage[items[i][0]].push(items[i][1]);
      storage[items[i][0]].sort((a, b) => {
        return b - a
      });
      storage[items[i][0]] = storage[items[i][0]].slice(0, 5)
    }
  }

  for (const studentId in storage) {
    let studentAverage =
      storage[studentId].reduce((acc, val) => {
        return acc + val;
      }, 0) / 5;
    result.push([studentId, Math.floor(studentAverage)]);
  }
  return result;
};
