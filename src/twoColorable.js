function twoColorable(edges) {
  const colors = edges.map(() => null);
  const stack = [0];

  colors[0] = true;
  while (stack.length) {
    const currIdx = stack.pop();
    for (const neighborIdx of edges[currIdx]) {
      if (colors[neighborIdx] === null) {
        colors[neighborIdx] = !colors[currIdx];
        stack.push(neighborIdx);
      } else if (colors[neighborIdx] === colors[currIdx]) {
        return false;
      }
    }
  }
  return true;
}
