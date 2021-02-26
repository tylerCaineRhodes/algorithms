function classPhotos(redShirtHeights, blueShirtHeights) {
  if (redShirtHeights.length !== blueShirtHeights.length) return false;

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const redInFront = redShirtHeights[0] < blueShirtHeights[0];
  const shortGroup = redInFront ? redShirtHeights : blueShirtHeights;
  const tallGroup = redInFront ? blueShirtHeights : redShirtHeights;

  for (let i = 0; i < shortGroup.length; i++) {
    if (shortGroup[i] >= tallGroup[i]) return false;
  }
  return true;
}
