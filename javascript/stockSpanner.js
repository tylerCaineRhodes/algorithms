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

let stockTHing = new StockSpanner();
console.log(stockTHing.next(100));
console.log(stockTHing.next(80));
console.log(stockTHing.next(60));
console.log(stockTHing.next(70));
// console.log(stockTHing.next(60));
// console.log(stockTHing.next(75));
// console.log(stockTHing.next(85));
// console.log(stockTHing.next(5));
