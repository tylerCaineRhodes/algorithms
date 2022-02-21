class ListNode{
  constructor(value, next){
    this.value = value || 0;
    this.next = next || null;
  }
}

var oddEvenList = function (head) {
  let oddList = ListNode(), evenList = ListNode();
//store heads of lists
  let odd_head = oddList, even_head = evenList;
  let increment = 1;

  while(head){
    if(increment % 2 === 1){
      oddList.next = head;
      oddList = oddList.next;
    } else {
      evenList.next = head;
      evenList = evenList.next
    }
    increment++;
    head = head.next;
  }
  evenList.next = null;
  odd_head.next = even_head.next;
  return odd_head.next;
};

var oddEvenListAlt = function (head) {
  if (!head) return null;
  let curr = head;
  let prev = null;
  let evensHead = null;
  let evensTail = null;
  while (curr) {
    if (!evensHead) {
      evensHead = evensTail = curr.next;
    } else {
      evensTail.next = curr.next;
      evensTail = curr.next;
    }
    if (curr.next === null) {
      break;
    } else {
      prev = curr;
      curr.next = curr.next.next;
      curr = curr.next;
    }
  }
  curr ? curr.next = evensHead : prev.next = evensHead;
  return head;
};
