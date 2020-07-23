class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const dec1Depth = calculateDepth(descendantOne, topAncestor);
  const dec2Depth = calculateDepth(descendantTwo, topAncestor);

  if(dec1Depth > dec2Depth){
    return traverseUp(descendantOne, descendantTwo, dec1Depth - dec2Depth);
  } else {
    return traverseUp(descendantTwo, descendantOne, dec2Depth - dec1Depth);
  }
}

function traverseUp(low, high, diff){
  while (diff !== 0){
    low = low.ancestor;
    diff-=1; 
  }
  while(low !== high){
    low = low.ancestor;
    high = high.ancestor;
  }
  return low;
}

function calculateDepth(descendant, topAncestor) {
  let depth = 0;
  while(descendant !== topAncestor){
    descendant = descendant.ancestor;
    depth +=1;
  }
  return depth;
}
