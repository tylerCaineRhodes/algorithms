/*
  you may jump from i to j (with i < j) following these rules:

  1.odd-jumps (1, 3, 5, 7...) you can jump to index j if
    a. arr[i] <= arr[j] (can only jump to an equal or larger number)
    b. arr[j] is the "smallest possible value".
    c. if there are multiple options, you must choose the smallest index

  2.even-jumps (2, 4, 6, 8...) you can jump to index j if
    a. arr[i] >= arr[j] (cal only jump to an equal or smaller number)
    b. arr[j] is the "largest possible value".
    c. if there are multiple options, you must choose the smallest index
    
    Input: arr = [10,13,12,14,15] Output: 2
    Input: arr = [2, 3, 1, 1, 4] Output: 3
*/

function oddEvenJumps(arr) {}

// function getOddMinOption(i, arr) {
//   const possibleValues = arr.slice(i + 1).filter((n) => n >= arr[i]);
//   if (!possibleValues.length) return null;

//   return Math.min(...possibleValues);
// }

// function getEvenMinOption(i, arr) {
//   const possibleValues = arr.slice(i + 1).filter((n) => n <= arr[i]);
//   if (!possibleValues.length) return null;

//   return Math.min(...possibleValues);
// }

// function isGoodIdx(i, arr, oddJump = true) {
//   if (i === arr.length - 1) return true;

//   for (let j = i + 1; j < arr.length; j++) {

//     if (oddJump) {
//       const option = getOddMinOption(i, arr);
//       if (!option) return false;

//       if (arr[i] <= arr[j] && arr[j] === option) {
//         return isGoodIdx(j, arr, false);
//       } else {
//         continue;
//       }
//     }

//     if (!oddJump) {
//       const option = getEvenMinOption(i, arr);
//       if (!option) return false;

//       if (arr[i] >= arr[j] && arr[j] === option) {
//         return isGoodIdx(j, arr, true);
//       } else {
//         continue;
//       }
//     }
//   }
//   return false;
// }

// function oddEvenJump(arr) {
//   let goodStartingIndicesCount = 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     const jumpsToEnd = isGoodIdx(i, arr);

//     if (jumpsToEnd) {
//       goodStartingIndicesCount++;
//       console.log(goodStartingIndicesCount)
//     }
//   }
//   return goodStartingIndicesCount;
// }

console.log(oddEvenJumps([2, 3, 1, 1, 4])); // 3
console.log(oddEvenJumps([10, 13, 12, 14, 15])); // 2
console.log(oddEvenJumps([5, 1, 3, 4, 2])); // 3
console.log(oddEvenJumps([81, 54, 96, 60, 58])); // 2
