class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let leader = head;
  let disciple = head;
  let increment = 0;

  while (leader.next !== null) {
    if (increment >= k) {
      leader = leader.next;
      disciple = disciple.next;
      increment++;
      continue;
    }
    leader = leader.next;
    increment++;
  }
  if (increment < k) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    //deletes the node 
    disciple.next = disciple.next.next;
  }
};

module.exports = removeKthNodeFromEnd;
