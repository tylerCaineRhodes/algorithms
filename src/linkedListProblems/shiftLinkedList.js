function shiftLinkedList(head, k) {
  const [length, currentTail] = getLengthAndTailOfList(head);
  //get offset k, including negatives and numbers larger than list
  const offset = Math.abs(k) % length;
  if (offset === 0) return head;
  //if k is negative, newTailPosition is k away from head, else new tail is k away from tail;
  const newTailIdx = k < 0 ? offset : length - offset;

  let newTail = head;
  let currentNode = 1;

  while (currentNode !== newTailIdx) {
    newTail = newTail.next;
    currentNode++;
  }

  let newHead = newTail.next;
  currentTail.next = head;
  newTail.next = null;

  return newHead;
}

function getLengthAndTailOfList(head) {
  let length = 1;
  let currentTail = head;
  while (currentTail.next) {
    currentTail = currentTail.next;
    length++;
  }
  return [length, currentTail];
}
