const kthToLastNode = (k, head) => {
  let current = head, count = 0;
  while(current){
    count++;
    current = current.next;
  }
  current = head;
  let increment = 0;
  
  while(current){
    increment++;
    if(increment === count - k) return current;
    current = current.next;
  }
  return null;
}

const kthLastNodeII = (k, head) => {
  let lengthOfList = 0;
  let curr = head;

  while(curr) {
    lengthOfList++;
    curr = head.next;
  }
  curr = head;
  let currentNodePosition = 0;

  while(curr) {
    currentNodePosition++;
    if(currentNodePosition === lengthOfList - k) return curr;
    curr = curr.next;
  }
  return null;
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);
ll.next.next.next.next = new Node(5);

console.log(kthToLastNode(2, ll));