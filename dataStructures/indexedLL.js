class Node {
  constructor(value){
    this.value = value || null;
    this.next = null
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead = (val) => {
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
  };
  addToTail = (val) => {
    let newTail = new Node(val);

    if(!this.tail){
      this.tail = newTail
    } else {
      list.tail.next = newTail;
      list.tail = newTail
    }
  }
  contains = (val) => {
    let current = this.head
    while(current){
      if(current.value = val){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  getNodeAtIndex = (index) => {
    let current = this.head;

    for(let i = 0; i < index; i++){
      current = current.next
    }
    return current;
  }
  removeHead = () => {
    this.head = this.head.next; 
  }
  removeNode = (node) => {
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

