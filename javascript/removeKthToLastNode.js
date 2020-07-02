class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let pointer = head,
    disciple = head;
  let increment = 1;

  while (pointer.next !== null) {
    if (increment > k) {
      pointer = pointer.next;
      disciple = disciple.next;
      increment++;
      continue;
    }
    pointer = pointer.next;
    increment++;
  }
  if (increment <= k) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    disciple.next = disciple.next.next;
  }
};

module.exports = removeKthNodeFromEnd;
