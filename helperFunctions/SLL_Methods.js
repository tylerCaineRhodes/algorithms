class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //addHead
  addAtHead = (val) => {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };
  //addTail
  addAtTail = (val) => {
    if (!this.tail) {
      this.addAtHead(val);
    } else {
      let newTail = new Node(val);
      this.tail.next = newTail;
      this.tail = newTail;
    }
  };
  //deleteHead
  deleteHead = () => {
    if (!this.head) return;
    this.head = this.head.next;
  };
  //getnodeatindex
  getAtIndex = (index) => {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current === null) return null;

      current = current.next;
    }
    return current;
  };

  getPrevNode = (index) => {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current === null) return null;
      current = current.next;
    }
    return current;
  };

  insertNodeAtIndex = (val, index) => {
    if (!this.getAtIndex(index)) return;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (this.getAtIndex(index) === this.tail) {
      this.addAtTail(val);
      return;
    }

    let node = this.getPrevNode(index);
    if (!node) return;

    let newNode = new Node(val);
    //here is study party
    newNode.next = node.next;
    node.next = newNode;
  };

  deleteNodeAtIndex = (index) => {
    if (index === 0) {
      this.head = this.head.next;
    } else if (!this.getAtIndex(index)) {
      return;
    }
    let pred = this.getPrevNode(index);

    if (!pred) {
      return;
    }
    pred.next = pred.next.next;
  };
}

let print = (head) => {
  let result = [],
    curr = head;

  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  return result;
};

let test = new LL();
test.addAtHead(1);
test.addAtHead(2);
test.addAtHead(5);

test.insertNodeAtIndex(6, 1);
test.insertNodeAtIndex(13, 0);
test.insertNodeAtIndex(2, 1);
test.insertNodeAtIndex(69, 3);
test.insertNodeAtIndex(404, 6);
// console.log(test.head)
console.log('tail -->', test.tail);
console.log(print(test.head));
