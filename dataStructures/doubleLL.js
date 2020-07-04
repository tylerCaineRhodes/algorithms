class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	setHead(node) {
		if (!this.head) {
			this.head = node;
			this.tail = node;
			return;
		} else {
			this.insertBefore(this.head, node)
		}
	}

	setTail(node) {
		if (!this.tail) {
			this.setHead(node);
			return;
		} else {
			this.insertAfter(this.tail, node)
		}
	}

	insertBefore(node, nodeToInsert) {
		if (nodeToInsert === this.head && nodeToInsert === this.tail || !node) return;

		this.remove(nodeToInsert);

		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;
		if (!node.prev) {
			this.head = nodeToInsert;
		} else {
			node.prev.next = nodeToInsert;
		}
		node.prev = nodeToInsert;
	}


	insertAfter(node, nodeToInsert) {
		if (nodeToInsert === this.head && nodeToInsert === this.tail || !node) return;

		this.remove(nodeToInsert)

		nodeToInsert.next = node.next;
		nodeToInsert.prev = node;
		if (!node.next) {
			this.tail = nodeToInsert;
		} else {
			node.next.prev = nodeToInsert;
		}
		node.next = nodeToInsert;
	}

	insertAtPosition(position, nodeToInsert) {
		if (position === 1) {
			this.setHead(nodeToInsert);
			return;
		}

		let current = this.head, increment = 1;

		while (current && position !== increment) {
			current = current.next;
			increment++;
		}

		if (current) {
			this.insertBefore(current, nodeToInsert);
		} else {
			this.setTail(nodeToInsert);
		}
	}

	removeNodesWithValue(value) {
		let current = this.head;

		while (current) {
			let nodeToRemove = current;
			current = current.next;
			if (nodeToRemove.value === value) {
				this.remove(nodeToRemove);
			}
		}
	}

	remove(node) {
		if (node === this.head) {
			this.head = this.head.next;
		}
		if (node === this.tail) {
			this.tail = this.tail.prev;
		}
		//study party with this-y
		if (node.prev) {
			node.prev.next = node.next;
		}
		if (node.next) {
			node.next.prev = node.prev;
		}
		node.next = null;
		node.prev = null;
	}

	getNodeAtIndex = (index) => {
		if(index < 0) return null;

		let curr = this.head;

		for(let i = 0; i < index; i++){
			if(!curr) return null;

			curr = curr.next
		}
		return curr;
	}

	containsNodeWithValue(value) {
		let current = this.head;

		while (current) {
			if (current.value === value) return true;
			current = current.next
		}
		return false;
	}
}

module.exports = { DoublyLinkedList, Node };
