/*
   Given an array of unsorted numbers and a target number, find a triplet in the
   array whose sum is as close to the target number as possible, return the sum
   of the triplet. If there are more than one such triplet, return the sum of the
   triplet with the smallest sum.
*/

function searchTriplet(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let closestDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const currDiff = targetSum - sum;

      const isSmallestDiff = Math.abs(currDiff) < Math.abs(closestDiff);
      const isSmallerSum = Math.abs(currDiff) === Math.abs(closestDiff) && currDiff > closestDiff;

      if (currDiff === 0) return targetSum;

      if (isSmallestDiff || isSmallerSum) {
        closestDiff = currDiff;
      }

      if (currDiff < 0) {
        right--;
      } else {
        left++
      }
    }
  }
  return targetSum - closestDiff;
}

console.log(
  searchTriplet([-1, 0, 2, 3], 3) // 2
)

console.log(
  searchTriplet([-3, -1, 1, 2], 1) // 0
)


console.log(
  searchTriplet([1, 0, 1, 1], 100) // 3
)


console.log(
  searchTriplet([0, 0, 1, 1, 2, 6], 5) // 4
)
