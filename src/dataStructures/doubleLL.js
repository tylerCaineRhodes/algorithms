class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(beforeNode, nodeToInsert) {
    if (!beforeNode) return;

    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

    this.remove(nodeToInsert);

    nodeToInsert.next = beforeNode;
    nodeToInsert.prev = beforeNode.prev;

    if (!nodeToInsert.prev) {
      this.head = nodeToInsert;
    } else {
      nodeToInsert.prev.next = nodeToInsert;
    }
    beforeNode.prev = nodeToInsert;
  }

  insertAfter(afterNode, nodeToInsert) {
    if (!afterNode) return;

    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

    this.remove(nodeToInsert);

    nodeToInsert.prev = afterNode;
    nodeToInsert.next = afterNode.next;

    if (!nodeToInsert.next) {
      this.tail = nodeToInsert;
    } else {
      afterNode.next.prev = nodeToInsert;
    }

    afterNode.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let increment = 1;

    let curr = this.head;
    while (position !== increment && curr) {
      curr = curr.next;
      increment++;
    }

    if (curr) {
      this.insertBefore(curr, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }
    node.next = null;
    node.prev = null;
  }

  getNodeAtIndex(idx) {
    if (idx < 0) return null;

    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      if (!curr) return null;
      curr = curr.next;
    }
    return curr;
  }

  removeNodesWithValue(value) {
    let curr = this.head;

    while (curr) {
      let nodeToRemove = curr;
      curr = curr.next;

      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  containsNodeWithValue(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  }
}
