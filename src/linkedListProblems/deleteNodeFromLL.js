const deleteNodeFromLL = (node) => {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
  return;
};
