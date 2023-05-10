class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
    this.c = 33;
  }

  [Symbol.iterator]() {
    let i = 0;

    return {
      next() {
        const curr = i;
        i++;
        return {
          value: curr === 0 ? 'a' : curr === 1 ? 'b' : 'c',
          done: curr > 2,
        };
      },
    };
  }

  get backwards() {
    let i = 0;

    return {
      next() {
        const curr = i;
        i++;
        return {
          value: curr === 0 ? 'c' : curr === 1 ? 'b' : 'a',
          done: curr > 2,
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

const stuff = new Stuff();
for (const item of stuff) console.log(item);
for (const item of stuff.backwards) console.log(item);

const aGeneratorObject = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const object1 = aGeneratorObject();
for (let i = 0; i < 4; i++) {
  console.log(object1.next());
}

const object2 = aGeneratorObject();

for (const value of object2) {
  console.log({ value });
}

function* gen() {
  yield* ['a', 'b', 'c'];
}

const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log('Closing');
        return { done: true };
      },
    };
  },
};

const [b] = obj;
console.log(b);

const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.children.length; i++) {
      yield this.children[i];
    }
  }

  get backwards() {
    const nodes = [...this];
    nodes.reverse();
    return nodes;
  }

  get count() {
    let count = 0;
    for (const node of this) {
      count++;
    }
    return count;
  }
}

function bfs(ktree) {
  const queue = [ktree];
  const seen = new Set();

  while (queue.length) {
    const curr = queue.shift();
    seen.add(curr.value);

    for (const child of curr) {
      if (!seen.has(child)) {
        queue.push(child);
      }
    }
  }
  return [...seen];
}

const tree = new Tree(1);
tree.children.push(new Tree(2));
tree.children.push(new Tree(3));
tree.children[0].children.push(new Tree(4));
tree.children[0].children.push(new Tree(5));
tree.children[1].children.push(new Tree(6));
tree.children[1].children.push(new Tree(7));
console.log(bfs(tree));
