export class Node {
  constructor(value, next, previous) {
    this.value = value || null;
    this.next = next || null;
    this.previous = previous || null;
  }
}

export class MyLinkedList {
  constructor() {
    this.vals = [];
  }
  get = (index) => {
    return this.vals[index] === undefined ? -1 : this.vals[index];
  };

  addAtHead = (val) => {
    this.vals.unshift(val);
  };

  addAtTail = (val) => {
    this.vals.push(val);
  };

  addAtIndex = (index, val) => {
    this.vals.splice(index, 0, val);
  };

  deleteAtIndex = (index) => {
    this.vals.splice(index, 1);
  };
}
