function minRewards(scores) {
  //create an auxilary array where each val is 1
  const rewards = scores.map((num) => 1);
  //iterate over scores starting with 1
  for (let i = 1; i < scores.length; i++) {
    let j = i - 1;
    //if current score is greater than previous score,
    if (scores[i] > scores[j]) {
      //current reward is previous reward + 1
      rewards[i] = rewards[j] + 1;
      //if previous score is greater than current
    } else {
      // while j >= 0 and previous score is greater than current
      while (j >= 0 && scores[j] > scores[j + 1]) {
        //previous reward = max of previous reward and currentreward + 1
        //decrement j
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j -= 1;
      }
    }
  }
  return rewards.reduce((a, b) => a + b, 0);
}
