// bitwise operators in javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

//   Read,   Write,  Execute
// 00000100 00000010 00000001

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001

let myPermission = 0; // 00000000

myPermission = myPermission | readPermission | writePermission; // 00000110
console.log({ myPermission }); // 6

let message = (myPermission & readPermission) ? 'yes' : 'no'; // yes
console.log({ message })

console.log(1 | 2); // bitwise OR (1)
// returned if either bit is 1

// 0 | 0 = 0
// 0 | 1 = 1
// 1 | 1 = 1

// 1 = 00000001
// 2 = 00000010

// result = 00000011 = 3

console.log(1 & 2); // bitwise AND (0)
// returned if both bits are 1

// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 1 = 1

// 1 = 00000001
// 2 = 00000010

// result = 00000000 = 0

console.log(1 ^ 2); // bitwise XOR (1)
// returned if only one of the two bits is 1

// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 1 = 0

// get the nth bit of a number
const num = 5; // 00000101
const n = 2;
// to find if nth bit of a number is 1
// use a mask that has a 1 in the nth position
const mask = 1 << n; // 1 shifted left n times
console.log(Boolean((num & mask) !== 0));

// clear the nth bit of a number
// use a mask that has a 1 in every position except the nth spot
// then when we AND the number with the mask, the nth bit will be cleared
const invertedMask = ~(1 << n); // 1 shifted left n times and inverted
console.log(invertedMask & mask);

// shift left
console.log(2 << 1); // 00000100 = 4
// shift right
console.log(4 >> 1); // 00000010 = 2

