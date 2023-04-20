import { BST } from '../src/dataStructures/BST';
import { DFS_Print } from '../src/helperFunctions/binaryTreeMethods';

describe('BST', () => {
  let tree1, tree2, tree3;

  beforeEach(() => {
    tree1 = new BST(10);
    [5, 15, 2, 13, 22, 1, 14, 12, 10, 15].forEach(tree1.insert.bind(tree1));

    tree2 = new BST(10);
    tree2.insert(15);

    tree3 = new BST(10);
    tree3.insert(5);
  });

  test('DFS_Print', () => {
    expect(DFS_Print(tree1)).toEqual([10, 5, 2, 1, 15, 13, 12, 10, 14, 22, 15]);
  });

  test('contains', () => {
    expect(tree1.contains(10)).toBeTruthy();
  });

  it('removes top-level with a duplicate', () => {
    tree1.remove(10);
    expect(DFS_Print(tree1)).toEqual([10, 5, 2, 1, 15, 13, 12, 14, 22, 15]);
  });

  it('removes top-level node with two children', () => {
    tree1.remove(10);
    tree1.remove(10);
    expect(tree1.contains(10)).toBeFalsy();
    expect(DFS_Print(tree1)).toEqual([12, 5, 2, 1, 15, 13, 14, 22, 15]);
  });

  it('removes node with left child (when the tree has a parent node)', () => {
    tree1.remove(10);
    tree1.remove(10);
    tree1.remove(5);
    expect(DFS_Print(tree1)).toEqual([12, 2, 1, 15, 13, 14, 22, 15]);
  });

  it('removes node with left child (when the tree has a parent node)', () => {
    tree1.remove(10);
    tree1.remove(10);
    tree1.remove(5);
    tree1.remove(22);
    expect(DFS_Print(tree1)).toEqual([12, 2, 1, 15, 13, 14, 15]);
  });

  it('removes node with right child (when the tree has a parent node)', () => {
    tree1.remove(10);
    tree1.remove(10);
    tree1.remove(5);
    tree1.remove(22);
    tree1.remove(13);
    expect(DFS_Print(tree1)).toEqual([12, 2, 1, 15, 14, 15]);
  });

  it('removes node when the tree is the root node (has no parent)', () => {
    tree2.remove(10);
    expect(DFS_Print(tree2)).toEqual([15]);
  });

  it('removes node when the tree is the root node (has no parent)', () => {
    tree3.remove(10);
    expect(DFS_Print(tree3)).toEqual([5]);
  });
});

