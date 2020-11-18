var maxArea = function (height) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = height.length - 1;

  while (p1 < p2) {
    let area = p2 - p1;
    let currentMinPillar;

    if (height[p1] < height[p2]) {
      currentMinPillar = height[p1];
      p1++;
    } else {
      currentMinPillar = height[p2];
      p2--;
    }
    maxArea = Math.max(maxArea, currentMinPillar * area);
  }
  return maxArea;
};
