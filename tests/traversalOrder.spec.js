const {
  DF_PREORDER_PRINT,
  DF_INORDER_PRINT,
  DF_POSTORDER_PRINT
} = require('../dataStructures/traversalOrder');

const {
  Node,
  bfsInsertion,
  BFS_Print
} = require('../helperFunctions/binaryTreeMethods');

describe('traversalOrder functions', () => {
    let root, tree;
    beforeEach(() => {
      root = new Node();
      tree = bfsInsertion(root, [1, 2, 3, 4, 5, 6, 7], 0);
    });

  it('insertion function seeds values correctly and creates a test tree', () => {
    expect(BFS_Print(tree)).toStrictEqual([1,2,3,4,5,6,7])
  });

  it('uses preorder traversal to print the tree', () => {
    expect(DF_PREORDER_PRINT(tree)).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('uses inorder traversal to print the tree', () => {
    expect(DF_INORDER_PRINT(tree)).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
  });

  it('uses postorder traversal to print the tree', () => {
    expect(DF_POSTORDER_PRINT(tree)).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
  });
})
