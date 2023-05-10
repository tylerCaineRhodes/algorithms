export class Queue {
  constructor() {
    this.enqueue = [];
    this.dequeue = [];
  }

  enqueueVal(num) {
    this.enqueue.push(num);
  }

  dequeueVal() {
    if (!this.dequeue.length) {
      while (this.enqueue.length) {
        this.dequeue.push(this.enqueue.pop());
      }
    }
    return this.dequeue.pop();
  }
}
