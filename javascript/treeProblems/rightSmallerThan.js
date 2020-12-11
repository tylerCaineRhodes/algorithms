function rightSmallerThan(array) {
	if (!array.length) return [];

  const bst = new SpecialBST(array[array.length - 1]);
  const rightSmallerCounts = new Array(array.length).fill(0);

  for (let i = array.length - 2; i >= 0; i--) {
    bst.insert(array[i], i, rightSmallerCounts);
  }
  return rightSmallerCounts;
}

class SpecialBST {
  constructor(value) {
    this.value = value;
    this.leftSubtreeSize = 0;
    this.left = null;
    this.right = null;
  }

  insert(value, idx, rightSmallerCounts, numSmallerAtInsertTime = 0) {
    if (value < this.value) {
      this.leftSubtreeSize += 1;
      if (!this.left) {
        this.left = new SpecialBST(value);
        rightSmallerCounts[idx] = numSmallerAtInsertTime;
      } else {
        this.left.insert(
          value,
          idx,
          rightSmallerCounts,
          numSmallerAtInsertTime
        );
      }
    } else {
      numSmallerAtInsertTime += this.leftSubtreeSize;
      if (value > this.value) numSmallerAtInsertTime += 1;

      if (!this.right) {
        this.right = new SpecialBST(value);
        rightSmallerCounts[idx] = numSmallerAtInsertTime;
      } else {
        this.right.insert(
          value,
          idx,
          rightSmallerCounts,
          numSmallerAtInsertTime
        );
      }
    }
  }
}
