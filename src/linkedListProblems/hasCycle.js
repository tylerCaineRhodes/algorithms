var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (fast !== slow) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
