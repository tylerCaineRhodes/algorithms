class Node {
  constructor(value){
    this.value = value || null;
    this.next = null;
  }
}

const reverse = (head) => {
  let current = head;
  let previous = null;
  let nextStep = null;

  while(current){
    nextStep = current.next;
    current.next = previous;
    previous = current;
    current = nextStep
  }
  return previous;
}

let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4)

console.log(reverse(ll))