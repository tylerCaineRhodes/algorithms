const mergeSortedArrays = (array1, array2) => {
  let pointer1 = 0, pointer2 = 0, resultskies = [];

  while (resultskies.length < array1.length + array2.length) {
    if (pointer1 > array1.length) {
      return resultskies.concat(array2.slice(pointer2));
    } else if (pointer2 > array2.length) {
      return resultskies.concat(array1.slice(pointer1));
    };

    if (array1[pointer1] < array2[pointer2]) {
      resultskies.push(array1[pointer1]);
      pointer1++;
    } else {
      resultskies.push(array2[pointer2]);
      pointer2++;
    };
  };
  return resultskies;
};

module.exports = {mergeSortedArrays};

