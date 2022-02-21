import { LL } from '../src/dataStructures/indexedLL';
import remove from '../src/linkedListProblems/removeKthToLastNode';

describe('remove kth to last node from a linked list', () => {
  let linkedlist;
  beforeEach(() => {
    linkedlist = new LL();
    linkedlist.addToTail(1)
    linkedlist.addToTail(2)
    linkedlist.addToTail(3)
    linkedlist.addToTail(4)
    linkedlist.addToTail(5)
  });

  it('it removes the head when index is 0', () => {
    remove(linkedlist.head, 1);
    expect(linkedlist.contains(5)).toEqual(false)
  });

  it('it removes the head when the index is too high', () => {
    remove(linkedlist.head, 20);
    expect(linkedlist.contains(1)).toEqual(false)
  });

  it('it removes the third node from the tail', () => {
    remove(linkedlist.head, 3);
    expect(linkedlist.contains(3)).toEqual(false)
  });
});
