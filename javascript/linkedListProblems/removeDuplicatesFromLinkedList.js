class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//solution #1
function removeDuplicatesFromLinkedList(linkedList) {
  let curr = linkedList;
  while(curr && curr.next) {
    if(!nextIsTail(curr)) {
      if(nextHasSameVal(curr)) {
        curr.next = curr.next.next
      } else {
        curr = curr.next
      }
    } else {
      if(nextHasSameVal(curr)) curr.next = null;
      break;
    }
  }
  return linkedList;
}

//solution #2
function removeDuplicatesFromLinkedList(linkedList) {
  let curr = linkedList;
  while (curr !== null) {
    let nextUnique = curr.next; 
    while (nextUnique !== null && nextUnique.value === curr.value) {
      nextUnique = nextUnique.next
    }
    curr.next = nextUnique;
    curr = nextUnique;
  }
  return linkedList;
}