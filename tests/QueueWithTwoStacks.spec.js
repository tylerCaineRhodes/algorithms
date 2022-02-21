import { Queue } from '../src/QueueWithTwoStacks.js';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
      queue.enqueueVal(1);
      queue.enqueueVal(2);
      queue.enqueueVal(3);
  });

  it('should utilize two stacks', () => {
    expect(queue.enqueue).toEqual([1,2,3]);
    expect(queue.dequeue).toEqual([]);
  });

  it('should be first in first out', () => {
    expect(queue.dequeueVal()).toEqual(1);
    expect(queue.enqueue).toEqual([]);
    expect(queue.dequeue).toEqual([3,2]);
  });

  it('should manage new enqueue values', () => {
    expect(queue.dequeueVal()).toEqual(1);
      expect(queue.enqueue).toEqual([]);
      expect(queue.dequeue).toEqual([3,2]);

    expect(queue.dequeueVal()).toEqual(2);
      expect(queue.dequeue).toEqual([3]);

    queue.enqueueVal(5);
      expect(queue.enqueue).toEqual([5]);
      expect(queue.dequeue).toEqual([3]);

    expect(queue.dequeueVal()).toEqual(3);
      expect(queue.enqueue).toEqual([5]);
      expect(queue.dequeue).toEqual([]);

    expect(queue.dequeueVal()).toEqual(5);
      expect(queue.enqueue).toEqual([]);
      expect(queue.dequeue).toEqual([]);
  });
});
