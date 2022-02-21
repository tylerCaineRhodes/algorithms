import { DoublyLinkedList, Node } from '../src/dataStructures/doubleLL';

const printListVals = (head) => {
  let results = [], curr = head; 

  while(curr){
    results.push(curr.value)
    curr = curr.next;
  }
  return results;
};

describe('doubly linked list', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new DoublyLinkedList();
    for(let i = 1; i <=3; i++){
      let node = new Node(i);
      linkedList.setHead(node);
    }
  });
  //3 --> 2 --> 1 --> null
  it('is non-circular', () => {
    expect(printListVals(linkedList.head)).toStrictEqual([3, 2, 1]);
    expect(linkedList.tail.next).toEqual(null);
  })

  it('insertBefore: does nothing if linkedlist only has one value', () => {
    let node = linkedList.getNodeAtIndex(2), nodeToInsert = linkedList.head;
    linkedList.removeNodesWithValue(2);
    linkedList.removeNodesWithValue(1);
    expect(printListVals(linkedList.head)).toStrictEqual([3])

    linkedList.insertBefore(node, nodeToInsert)
    expect(printListVals(linkedList.head)).toStrictEqual([3])
  });

  it('insertAfter: does nothing if linkedlist only has one value', () => {
    let node = linkedList.getNodeAtIndex(0), nodeToInsert = linkedList.head;
    linkedList.removeNodesWithValue(1);
    linkedList.removeNodesWithValue(3);
    expect(printListVals(linkedList.head)).toStrictEqual([2])

    linkedList.insertAfter(node, nodeToInsert)
    expect(printListVals(linkedList.head)).toStrictEqual([2])
  });

  it('setHead: head and tail should be different vals', () => {
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(1);
  });

  it('setTail: if tail exists, adds a new value and sets to tail', () => {
    let node = new Node(5)
    linkedList.setTail(node);

    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(5);
  });

  it('setTail: sets head and tail if list is empty', () => {
    linkedList = new DoublyLinkedList();
    let node = new Node(5)
    linkedList.setTail(node);

    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.tail.value).toEqual(5);
  });

  it('containsNodeWithValue: returns true if value is in linked list', () => {
    expect(linkedList.containsNodeWithValue(1)).toEqual(true);
    expect(linkedList.containsNodeWithValue(2)).toEqual(true);
    expect(linkedList.containsNodeWithValue(3)).toEqual(true);
  });

  it('containsNodeWithValue: returns false if value is not in linked list', () => {
    expect(linkedList.containsNodeWithValue(6)).toEqual(false);
  });

  it('removeNodesWithValue: removes the head node', () => {
    linkedList.removeNodesWithValue(3);

    expect(linkedList.containsNodeWithValue(3)).toEqual(false);
    expect(linkedList.head.value).toEqual(2);
  });

  it('removeNodesWithValue: removes the tail node', () => {
    linkedList.removeNodesWithValue(1);

    expect(linkedList.containsNodeWithValue(1)).toEqual(false);
    expect(linkedList.tail.value).toEqual(2);
    expect(linkedList.tail.next).toEqual(null);
  });

  it('removeNodesWithValue: removes the nodes with value of 5', () => {
    for(let i = 0; i < 10; i++){
      let node = new Node(5)
      linkedList.setTail(node)
    }
    linkedList.removeNodesWithValue(5);

    expect(linkedList.containsNodeWithValue(5)).toEqual(false);
    expect(linkedList.tail.next).toEqual(null);
  });

  it('insertAtPosition: sets head when position is 1', () => {
    let node = new Node(404);
    linkedList.insertAtPosition(1, node);
    expect(linkedList.head.value).toEqual(404)
    expect(linkedList.head.next.value).toEqual(3)
  });

  it('insertAtPosition: sets tail when position is 3', () => {
    let node = new Node(404);
    linkedList.insertAtPosition(4, node);
    expect(linkedList.tail.value).toEqual(404);
    expect(linkedList.tail.next).toEqual(null);
  });

  it('getNodeAtIndex: returns null if index doesn\'t exist', () => {
    expect(linkedList.getNodeAtIndex(13)).toEqual(null)
    expect(linkedList.getNodeAtIndex(-1)).toEqual(null)
  })

  it('insertAtPosition: sets number at position 2', () => {
    let node = new Node(404);
    linkedList.insertAtPosition(2, node);
    expect(linkedList.getNodeAtIndex(1).value).toEqual(404);    
    expect(linkedList.getNodeAtIndex(2).value).toEqual(2);    
  });
});
