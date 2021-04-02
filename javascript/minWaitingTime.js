function minimumWaitingTime(queries) {
  if(queries.length < 2) return 0;
  queries.sort((a, b) => a - b);
  const times = queries.map(q => 0);
  for(let i = 1; i < queries.length; i++) {
    times[i] = times[i - 1] + queries[i - 1];
  }
  return times.reduce((acc, val) => val + acc, 0);
}

test = [3,2,1,2,6]

console.log(minimumWaitingTime(test))// should be 17