var twoCitySchedCost = function (costs) {
  let city1 = 0,
    city2 = 0,
    full1 = false,
    full2 = false;
  let sum = 0;
  
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));

  for (let pair of costs) {
    if (city1 === costs.length / 2) full1 = true;
    if (city2 === costs.length / 2) full2 = true;
    
    if ((!full1) && (!full2)) {
      if (pair[1] > pair[0]) {
        sum += pair[0];
        city1++;
        continue;
      } else {
        sum += pair[1];
        city2++;
        continue;
      }
    }
    if (full1) {
      sum += pair[1];
      city2++;
      continue;
    }
    if (full2) {
      sum += pair[0];
      city1++;
      continue;
    }
  }
  return sum;
};
console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
