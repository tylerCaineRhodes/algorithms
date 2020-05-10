const binarySearch = (arr, target, start, end) => {
  if(start > end){
    return false;
  }
  let mid = Math.floor((start + end) / 2);

  if(arr[mid] === target){
    return true;
  }
  if(arr[mid] > target){
    return binarySearch(arr, target, start, mid - 1)
  } else {
    return binarySearch(arr, target, mid + 1, end)
  }
}

let array = [1,2,3,4,5,6]
console.log(binarySearch(array, 3, 0, array.length - 1))
console.log(binarySearch(array, 7, 0, array.length - 1));