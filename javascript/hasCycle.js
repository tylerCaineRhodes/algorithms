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


var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow) return slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  return null;
};

var detectCycleWMemo = function (head) {
  let collection = new Set();

  let current = head;

  while (current) {
    if (collection.has(current)) {
      return current;
    }
    collection.add(current);
    current = current.next;
  }
  return null;
};

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
    current = current.next;
  }
  return null;
};


