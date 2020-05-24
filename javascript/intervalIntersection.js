var intervalIntersection = function (A, B) {
  //iterate over longest array followed by the shortest array;
  if(A.length === 0 || B.length === 0) return [];
  let longArr, shortArr, result = [];

  if(A.length < B.length) {
    shortArr = A.slice();
    longArr = B.slice();
  } else {
    shortArr = B.slice();
    longArr = A.slice();
  }
  
  for (let i = 0; i < longArr.length; i++) {
    for(let j = 0; j < shortArr.length; j++){
      let highestFirstIndex = Math.max(longArr[i][0], shortArr[j][0]);
      let lowestSecondIndex = Math.min(longArr[i][1], shortArr[j][1]);
  
      if (highestFirstIndex <= lowestSecondIndex) {
        result.push([highestFirstIndex, lowestSecondIndex]);
      }
    }
  }
  return result;
};

  console.log(intervalIntersection([[0, 2],[5, 10],[13, 23],[24, 25]],[[1, 5],[8, 12],[15, 24],[25, 26]]));
  console.log(intervalIntersection([[14, 16]], [[7,13], [16,26]]));
