function moveElementToEnd(array, toMove) {
  let p1 = 0;
  let p2 = array.length - 1;

  while(p1 <= p2) {
    while(p1 < p2 && array[p2] === toMove) {
      p2 -= 1;
    }
    if(array[p1] === toMove) {
      swap(array, p1, p2)
    }
    p1 += 1;
  } 
  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}