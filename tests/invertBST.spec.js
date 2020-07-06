const {
  BFS_Print,
  DFS_Print,
  Node,
  bfsInsertion,
  normalDF_Print,
} = require('../helperFunctions/binaryTreeMethods.js');

const { invertTree } = require('../javascript/invertBST.js');

describe('invertBST', () => {
  let tree;
  beforeEach(() => {
    tree = bfsInsertion(new Node(), [4,2,7,1,3,6,9], 0);
  });
  it('should create a proper test tree', () => {
    expect(BFS_Print(tree)).toStrictEqual([4,2,7,1,3,6,9]);
    expect(DFS_Print(tree)).toStrictEqual([4,2,1,3,7,6,9]);
    expect(normalDF_Print(tree)).toStrictEqual([4, 2, 1, 3, 7, 6, 9]);
  });

  it('should invert tree', () => {
    let inverted = invertTree(tree);
     expect(BFS_Print(inverted)).toStrictEqual([4,7,2,9,6,3,1]);
     expect(DFS_Print(inverted)).toStrictEqual([4,7,9,6,2,3,1]);
  });
});
