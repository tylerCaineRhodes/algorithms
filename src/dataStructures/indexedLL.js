export class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null
  }
}

export class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead = (val) => {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
  };

  addToTail = (val) => {
    let newTail = new Node(val);

    if (!this.tail) {
      this.head = newTail
      this.tail = newTail
    } else {
      this.tail.next = newTail;
      this.tail = newTail
    }
  }

  contains = (val) => {
    let current = this.head
    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  getNodeAtIndex = (index) => {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      if (current === null) return null;

      current = current.next
    }
    return current;
  }

  removeHead = () => {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeTail = () => {
    if (!this.tail) return;

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  removeNode = (node) => {
    if (node !== this.tail) {
      node.value = node.next.value;
      node.next = node.next.next;
    } else {
      this.removeTail();
    }
  }

  addAtIndex = (index, val) => {
    let indexNode = this.getNodeAtIndex(index);
    if (!indexNode) {
      return;
    } else if (indexNode === this.tail) {
      this.addToTail(val)
    } else if (indexNode === this.head) {
      this.addToHead(val)
    } else {
      let newNode = new Node(val);
      let pointer = this.head;

      while (pointer.next && pointer.next !== indexNode) {
        pointer = pointer.next
      }
      newNode.next = indexNode;
      pointer.next = newNode;
    }
  };

  deleteAtIndex = (index) => {
    let node = this.get(index);
    if (!node) return;

    if (node !== this.tail) {
      node.value = node.next.value;
      node.next = node.next.next;
    } else {
      this.removeTail();
    }
  }
}
