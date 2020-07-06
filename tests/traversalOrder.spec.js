const {
  DF_PREORDER_PRINT,
  DF_INORDER_PRINT,
  DF_POSTORDER_PRINT,
  DF_PREORDER_PRINT_SD,
  DF_INORDER_PRINT_SD,
  DF_POSTORDER_PRINT_SD
} = require('../dataStructures/traversalOrder');

const {
  Node,
  bfsInsertion,
  BFS_Print
} = require('../helperFunctions/binaryTreeMethods');

describe('Node bfs insert method', () => {
  it('should create a new tree in BFS order', () => {
    let test = new Node(1);
    for (let i = 2; i < 8; i++) {
      test.insert(i)
    };
    expect(BFS_Print(test)).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
  });
});

describe('traversalOrder functions', () => {
    let root, tree;
    beforeEach(() => {
      root = new Node();
      tree = bfsInsertion(root, [1, 2, 3, 4, 5, 6, 7], 0);
    });

  it('insertion function seeds values correctly and creates a test tree', () => {
    expect(BFS_Print(tree)).toStrictEqual([1,2,3,4,5,6,7]);
  });

  it('uses preorder traversal to print the tree', () => {
    expect(DF_PREORDER_PRINT(tree)).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
    expect(DF_PREORDER_PRINT(tree)).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
    expect(DF_PREORDER_PRINT_SD(tree)).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('uses inorder traversal to print the tree', () => {
    expect(DF_INORDER_PRINT(tree)).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
    expect(DF_INORDER_PRINT_SD(tree)).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
  });

  it('uses postorder traversal to print the tree', () => {
    expect(DF_POSTORDER_PRINT(tree)).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
    expect(DF_POSTORDER_PRINT_SD(tree)).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});
