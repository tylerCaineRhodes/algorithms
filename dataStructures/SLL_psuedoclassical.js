class Node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

MyLinkedList.prototype.get = function (index) {
  let pointer = this.head;
  for (let i = 0; i < index; i++) {
    if (pointer === null) return null;
    pointer = pointer.next;
  }
  return pointer;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (!this.tail) {
    this.addAtHead(val);
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

MyLinkedList.prototype.removeTail = function () {
  if (!this.tail) return;

  let current = this.head;
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
  this.tail = current;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  let indexNode = this.get(index);
  if (!indexNode) {
    return;
  } else if (indexNode === this.tail) {
    this.addAtTail(val);
  } else if (indexNode === this.head) {
    this.addAtHead(val);
  } else {
    let newNode = new Node(val);
    let pointer = this.head;

    while (pointer.next && pointer.next !== indexNode) {
      pointer = pointer.next;
    }
    newNode.next = indexNode;
    pointer.next = newNode;
  }
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  let node = this.get(index);
  if (!node) return;

  if (node !== this.tail) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    this.removeTail();
  }
};

const check = (result, expected) => {
  return expected === result ? true : false;
};

const printLL = (head) => {
  let vals = [];
  let current = head;
  while (current) {
    vals.push(current.value);
    current = current.next;
  }
  return vals;
};

let myll = new MyLinkedList();
myll.addAtHead(1);
myll.addAtHead(2);
myll.addAtTail(5);

let thing = printLL(myll.head);
console.log(thing);

//2 -> 1 -> 5 -> null
let tests = [
  check(myll.get(0).value, 2),
  check(myll.get(1).value, 1),
  check(myll.get(2).value, 5),
  check(myll.get(3), null),
  check(myll.get(10), null),
];
console.log(...tests);

myll.addAtIndex(10, 4);
myll.addAtIndex(0, 4);
console.log(check(myll.get(0).value, 4));

myll.addAtIndex(3, 6);
console.log(check(myll.get(4).value, 6));

myll.addAtIndex(1, 5);
console.log(check(myll.get(1).value, 5));

myll.addAtIndex(2, 6);
console.log(check(myll.get(1).value, 5));

//when index is out of range
myll.deleteAtIndex(15);
console.log(printLL(myll.head));

//when index is head
myll.deleteAtIndex(0);
console.log(printLL(myll.head));
console.log(check(myll.get(0).value, 5));
