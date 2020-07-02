const { Node, LL } = require('../dataStructures/indexedLL.js');

describe('empty linked list', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LL();
  })

  it("addToHead: adds a head and a tail if either don't exist", () => {
    linkedList.addToHead(1);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(1);
  });

  it('addToHead: replaces the head node as expected', () => {
    linkedList.addToHead(40);
    linkedList.addToHead(50);
    expect(linkedList.head.value).toEqual(50);
    expect(linkedList.head.next.value).toEqual(40);
  })

  it("addtoTail: adds a head and a tail if either don't exist, with method", () => {
    linkedList.addToTail(1);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(1);
  });

  it("addtoTail: forms a complete LL with add-to-tail method", () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(5);
  });
})

describe('indexed linked list', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LL();
       linkedList.addToHead(1);
       linkedList.addToHead(2);
       linkedList.addToHead(3);
  });

  it('addToHead: head and tail should be different vals', () => {
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(1);
  })

  it('addToHead: if head exists, adds a new value and sets to head of list', () => {
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(1);
  })

  it("addtoTail: if tail exists, adds a new value and sets to tail", () => {
      linkedList.addToTail(5);

      expect(linkedList.head.value).toEqual(3);
      expect(linkedList.tail.value).toEqual(5);
  });

  it("contains: returns true if value is in linked list", () => {
    expect(linkedList.contains(1)).toEqual(true);
    expect(linkedList.contains(2)).toEqual(true);
    expect(linkedList.contains(3)).toEqual(true);
  });

  it("contains: returns false if value is not in linked list", () => {
    expect(linkedList.contains(6)).toEqual(false);
  });

  it('getNodeAtIndex: returns the proper node at given index', () => {
    expect(linkedList.getNodeAtIndex(0).value).toEqual(3)
    expect(linkedList.getNodeAtIndex(1).value).toEqual(2)
    expect(linkedList.getNodeAtIndex(2).value).toEqual(1)
    expect(linkedList.getNodeAtIndex(3)).toEqual(null)
  });

  it('removeHead: removes the head in the linked list', () => {
    expect(linkedList.head.value).toEqual(3);
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(1);
  });

  it('getNodeAtIndex: returns a given node at the proper index', () => {
    expect(linkedList.getNodeAtIndex(0).value).toEqual(3)
    expect(linkedList.getNodeAtIndex(2).value).toEqual(1);
    expect(linkedList.getNodeAtIndex(5)).toEqual(null);
  });

  it('removeNode: removes a given node for the head', () => {
    let removeVal = linkedList.getNodeAtIndex(0);
    linkedList.removeNode(removeVal);
    expect(linkedList.contains(3)).toEqual(false);
  });

  it('removeNode: removes a given node that isn\'t the head or tail val', () => {
    let removeVal = linkedList.getNodeAtIndex(1);
    linkedList.removeNode(removeVal);
    expect(linkedList.contains(2)).toEqual(false);
  });

  it('removeNode: removes a given node for the tail', () => {
    let removeVal = linkedList.getNodeAtIndex(2);
    linkedList.removeNode(removeVal);
    expect(linkedList.contains(1)).toEqual(false);
  });
});
