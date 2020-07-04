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

  addAtHead = (val) => {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  addAtTail = (val) => {
    if (!this.tail) {
      this.addAtHead(val);
    }
    let newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
  };

  deleteHead = () => {
    if (!this.head) return;
    this.head = this.head.next;
  };

  getAtIndex = (index) => {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      if (!curr) return null;
      curr = curr.next;
    }
    return curr;
  };

  getPrevNode = (index) => {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!curr) return null;
      curr = curr.next;
    }
    return curr;
  };

  insertNodeAtIndex = (val, index) => {
    if (!this.getAtIndex(index)) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let newNode = new Node(val);
    let prev = this.getPrevNode(index);

    newNode.next = prev.next;
    prev.next = newNode;
  };

  deleteNodeAtIndex = (index) => {
    if (!this.getAtIndex(index)) return;

    if (index === 0) {
      this.deleteHead(val);
    }
    let prev = this.getPrevNode(index);
    prev.next = prev.next.next;
  };
}

//prints values in LL
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
