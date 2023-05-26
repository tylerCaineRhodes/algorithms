class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDepth(descendantOne, topAncestor);
  const depthTwo = getDepth(descendantTwo, topAncestor);

  if (depthTwo < depthOne) {
    return converge(descendantOne, descendantTwo, depthOne - depthTwo);
  } else {
    return converge(descendantTwo, descendantOne, depthTwo - depthOne);
  }
}

function getDepth(descendant, topAncestor) {
  let depth = 0;
  let curr = descendant;
  while (curr !== topAncestor) {
    depth++;
    curr = curr.ancestor;
  }
  return depth;
}

function converge(lowAncestor, highAncestor, diff) {
  while (diff > 0) {
    lowAncestor = lowAncestor.ancestor;
    diff--;
  }
  while (lowAncestor !== highAncestor) {
    lowAncestor = lowAncestor.ancestor;
    highAncestor = highAncestor.ancestor;
  }
  return lowAncestor;
}
