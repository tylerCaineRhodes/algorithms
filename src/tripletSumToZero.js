function searchTriplets(arr) {
  arr.sort((a, b) => a - b);

  const triplets = [];
  const memo = {}

  for (let i = 0; i < arr.length - 2; i++) {
    let p1 = i + 1;
    let p2 = arr.length - 1;

    while (p1 < p2) {
      const triplet = [arr[i], arr[p1], arr[p2]];
      const sum = triplet.reduce((acc, val) => acc += val, 0);
      if (sum === 0) {
        const key = triplet.join('-');
        if (!(key in memo)) {
          memo[key] = true;
          triplets.push(triplet)
        }
      }

      if (sum > 0) {
        p2--;
      } else {
        p1++;
      }
    }

  }
  return triplets;
}


function searchTripletsI(arr) {
  arr.sort((a, b) => a - b);

  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let p1 = i + 1;
    let p2 = arr.length - 1;

    while (p1 < p2) {
      const triplet = [arr[i], arr[p1], arr[p2]];
      const sum = triplet.reduce((acc, val) => acc += val, 0);

      if (sum === 0) {
        triplets.push(triplet);
        p1++;
        p2--;
        while (p1 < p2 && arr[p1] === arr[p1 - 1]) p1++;
        while (p1 < p2 && arr[p2] === arr[p2 + 1]) p2--;
      }

      if (sum > 0) {
        p2--;
      } else if (sum < 0) {
        p1++;
      }
    }
  }

  return triplets;
}

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2])) // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.log(searchTriplets([-5, 2, -1, -2, 3])) // [[-5, 2, 3], [-2, -1, 3]]

console.log(searchTripletsI([-3, 0, 1, 2, -1, 1, -2])) // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.log(searchTripletsI([-5, 2, -1, -2, 3])) // [[-5, 2, 3], [-2, -1, 3]]
