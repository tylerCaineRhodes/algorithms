function getNthFib(n) {
  if(n === 2) return 1;
  if(n === 1) return 0;

  return getNthFib(n - 1) + getNthFib(n - 2);
}

function getNthFib_withMemoization(n, memo = { 2: 1, 1: 0 }) {
  if(memo[n] !== undefined) return memo[n];

  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);

  return memo[n];
}

function getNthFib_dynamicProgramming(n) {
  const numbers = new Array(n).fill(0);
  numbers[1] = 1;
  for(let i = 2; i < numbers.length; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }
  return numbers[n - 1];
}

function getNthFib_optimized(n) {
  if(n <= 1) return 0;

  const lastTwo = [0, 1];
  let count = 3;

  while(count <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    count++;
  }
  return lastTwo[1];
}


console.log(getNthFib_optimized(2));// should be 1
console.log(getNthFib_optimized(6));//should be 5
console.log(getNthFib_optimized(1));//should be 0
console.log(getNthFib_optimized(0));//should be 0