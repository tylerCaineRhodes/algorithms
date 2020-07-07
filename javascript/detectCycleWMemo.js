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
