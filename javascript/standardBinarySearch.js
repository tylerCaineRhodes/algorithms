const binarySearch = (arr, target) => {
  let start = 0, end = arr.length-1;

  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    
    if(arr[mid] === target){
      return true;
    }
    if(arr[mid] > target){
      end = mid - 1;
    }
    if(arr[mid] < target){
      start = mid + 1
    }
  }
  return false;
}

console.log(binarySearch([1,2,3,4,5], 5))