function taskAssignment(k, tasks) {
  const taskMemo = makeMemo(tasks);
  const sortedTasks = tasks.slice().sort((a, b) => a - b);
  const permutations = [];

  let p1 = 0;
  let p2 = tasks.length - 1;

  while (p1 < p2) {
    const firstIndex = taskMemo[sortedTasks[p1].pop()];
    const secondIndex = taskMemo[sortedTasks[p2].pop()];

    permutations.push([firstIndex, secondIndex]);
    p1 += 1;
    p2 -= 1;
  }
  return permutations;
}

function makeMemo(tasks) {
  return tasks.reduce((memo, task, index) => {
    memo[task] ? memo[task].push(index) : memo[task] = [index];
    return memo;
  }, {});
}