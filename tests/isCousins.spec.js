const { isCousins } = require('../javascript/treeProblems/isCousins.js');
const {
  Node,
  BFS_Print,
  DFS_Print,
  bfsInsertion,
} = require('../helperFunctions/binaryTreeMethods.js');


describe('isCousins', () => {
  let test;
  beforeEach(() => {
    test = new Node();
  });
  
  it('case: root = [1,2,3,4], x = 4, y = 3, ouput: false', () => {
    let rootTest1 = bfsInsertion(test, [1, 2, 3, 4], 0);
    console.log(DFS_Print(rootTest1))
    console.log(BFS_Print(rootTest1))
    expect(isCousins(rootTest1, 4, 3)).toBe(false);
  });  it('case: root = [1,2,3, null, 4, null, 5], x = 5, y = 4, ouput: true', () => {
    let rootTest2 = bfsInsertion(test, [1, 2, 3, null, 4, null, 5], 0);
    expect(isCousins(rootTest2, 5, 4)).toBe(true); //should be true
     console.log(DFS_Print(rootTest2));
     console.log(BFS_Print(rootTest2));
  });
  
  it('case: root = [1, 2, 3, null, 4], x = 2, y = 3, ouput: false', () => {
    let rootTest3 = bfsInsertion(test, [1, 2, 3, null, 4], 0);
      expect(isCousins(rootTest3, 2, 3)).toBe(false);
          console.log(DFS_Print(rootTest3));
          console.log(BFS_Print(rootTest3));
    });

  it('case: root = [1, 2, 5, 3, null, null, 6, 4], x = 3, y = 6, ouput: true', () => {
    let rootTest4 = bfsInsertion(test,  [1, 2, 5, 3, null, null, 6, 4], 0);
    expect(isCousins(rootTest4, 3, 6)).toBe(true);
    console.log(DFS_Print(rootTest4));
    console.log(BFS_Print(rootTest4));
  });
  });
