var getIntersectionNode = function (headA, headB) {
  let collectionA = new Set();
  let current = headA;
  while (current) {
    collectionA.add(current);
    current = current.next;
  }
  current = headB;
  while (current) {
    if (collectionA.has(current)) {
      return current;
    }
    current = current.next
  }
  return null;
};