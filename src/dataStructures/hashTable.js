class LLNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(key, value) {
    const newNode = new LLNode(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  find(key) {
    let curr = this.head;
    while (curr) {
      if (curr.key === key) return curr.val;
      curr = curr.next;
    }
    return null;
  }
}

const PRIME_NUMBER = 53;

class HashTable {
  constructor(size = PRIME_NUMBER) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0; // this line converts the hash into a 32-bit integer
    }
    return Math.abs(hash) % this.keyMap.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = new LL();
    }
    this.keyMap[index].append(key, value);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      return this.keyMap[index].find(key);
    }
    return null;
  }
}
