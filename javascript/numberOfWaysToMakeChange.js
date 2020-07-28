function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let num of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (num <= i) {
        ways[i] += ways[i - num];
      };
    };
  };
  return ways[n];
};
