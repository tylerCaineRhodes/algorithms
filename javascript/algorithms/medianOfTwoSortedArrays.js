var findMedianSortedArrays = function (nums1, nums2) {
  //concatenate the arrays and find the midpoint
  let pointer1 = 0, pointer2 = 0, combinedArray = [];

  while (combinedArray.length < nums1.length + nums2.length) {
    if (nums1[pointer1] < nums2[pointer2] || nums2[pointer2] === undefined) {
      combinedArray.push(nums1[pointer1]);
      pointer1++;
    } else {
      combinedArray.push(nums2[pointer2]);
      pointer2++;
    }
  }

  if (combinedArray.length % 2 === 1) {
    let midpointIndex = Math.floor((combinedArray.length) / 2)
    return combinedArray[midpointIndex]
  } else {
    return ((combinedArray[Math.floor(combinedArray.length / 2) - 1] + combinedArray[Math.floor(combinedArray.length / 2)]) / 2)
  }
};

console.log('expect 2 -->',findMedianSortedArrays([1,3], [2]))
console.log('expect 2.5 -->',findMedianSortedArrays([1,2], [3,4]))