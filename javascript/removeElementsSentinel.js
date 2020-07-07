class ListNode {
  constructor(val, next){
    this.val = val || 0;
    this.next = next || null;
  }
}
  
  const removeElementsSentinel = (head, val) => {
    if(!head) return null;
    //create sentinel node
    let dummie = new ListNode(0);
    //point next value to head
    dummie.next = head; 
    //create a pointer for prev value and set to sentinel
    let prev = dummie;
    //create a pointer for head
    let curr = head; 
    //while curr is not null
    while(curr){
      //if node has target value
      if(curr.val === val){
        //set sentinel's next to curr next
        prev.next = curr.next
      } else {
        //set prev pointer to current node
        prev = curr
      };
      //update current
      curr = curr.next;
    };
    return dummie.next;
  };
   