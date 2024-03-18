function lengthOfLIS(array) {
  const dp = new Array(array.length).fill(1);
  /*
    array = [4, 2, 3, 4, 1]
    dp =    [1, 2, 3, 4, 5]
  */
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= array[i]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}
