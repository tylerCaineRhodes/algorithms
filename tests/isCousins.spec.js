const { isCousins } = require('../javascript/algorithms/isCousins.js');
const  {
  Node,
  BFS_Print,
  DFS_Print,
  createBinaryTreeFromArray,
} = require('../helperFunctions/binaryTreeMethods.js');

  
  describe('isCousins', () => {
    let testTree1 = new Node();
    let testTree2 = new Node();
    let testTree3 = new Node();
    let rootTest1 = createBinaryTreeFromArray(testTree1, [1, 2, 3, 4]);
    let rootTest2 = createBinaryTreeFromArray(testTree2, [1, 2, 3, null, 4, null, 5]);
    let rootTest3 = createBinaryTreeFromArray(testTree3, [1, 2, 3, null, 4]);
    console.log(DFS_Print(rootTest2))
    console.log(BFS_Print(rootTest2))
    
    it('case: root = [1,2,3,4], x = 4, y = 3, ouput: false', () => {
      expect(isCousins(rootTest1, 4, 3)).toBe(false);
    });

    it('case: root = [1,2,3, null, 4, null, 5], x = 5, y = 4, ouput: true', () => {
      expect(isCousins(rootTest2, 5, 4)).toBe(true);
    });

    it('case: root = [1, 2, 3, null, 4], x = 2, y = 3, ouput: false', () => {
      expect(isCousins(rootTest3, 2, 3)).toBe(false);
    });
  });