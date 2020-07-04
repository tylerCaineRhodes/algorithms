class StockSpanner{
  constructor(){
    this.selection = [];
  }

  next = (price) => {
    if(!price) return null;
    let span = 1;

    while(this.selection[this.selection.length - span] <= price){
      span++;
    }
    this.selection.push(price)
    return span;
  }
};

class StockSpanner {
  constructor() {
    this.head = null;
  }

  next = (price) => {
    if (!price) return null;

    if (!this.head) {
      this.head = new PriceNode(price);

    } else if (this.head.val > price) {

      const newNode = new PriceNode(price, 1, this.head);
      this.head = newNode;
    } else {
      let streakTotal = 1;
      let curr = this.head;
      while (curr && price >= curr.val) {
        streakTotal += curr.streak;
        curr = curr.prev;
      }
      this.head = new PriceNode(price, streakTotal, curr);
    }
    return this.head.streak;
  }
}
class PriceNode {
  constructor(val, streak, prev) {
    this.val = val || null;
    this.streak = streak || 1;
    this.prev = prev || null;
  }
}
// STACK VERSION =========
class StockSpanner {
  constructor() {
    this.prices = [];
  }
  next(price) {
    if (!price) return null;
    const { prices } = this;

    if (prices.length === 0) {
      prices.push({ streak: 1, price });
      return 1;
    } else if (prices[prices.length - 1].price > price) {
      prices.push({ streak: 1, price });
      return 1;
    } else {
      let streak = 1;
      while (
        prices[prices.length - 1] && prices[prices.length - 1].price <= price
      ) {
        let temp = prices.pop();
        streak += temp.streak;
      }
      prices.push({ streak, price });
      return streak;
    }
  }
}

const stockTHing = new StockSpanner();
const tests = [
  stockTHing.next(100),
  stockTHing.next(80),
  stockTHing.next(60),
  stockTHing.next(70),
  stockTHing.next(60),
  stockTHing.next(75),
  stockTHing.next(85),
  stockTHing.next(5),
];

console.log({ tests });
