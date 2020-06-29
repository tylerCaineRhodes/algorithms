class Queue {
  constructor(){
    this.enqueue = [];
    this.dequeue = [];
  }
  enqueueVal = (num) => {
    this.enqueue.push(num);
  }
  dequeueVal = () => {
    if(this.dequeue.length === 0){
      while (this.enqueue.length) {
        this.dequeue.push(this.enqueue.pop());
      }
    }
    let dequeuedVal = this.dequeue.pop();
    return dequeuedVal;
  }
}

module.exports = { Queue };
