const RPS = (n) => {
  const result = [];
  const selection = 'rps';
  backtrack(selection, '', result, n);
  return result;
};

const backtrack = (selection, str, result, n) => {
  if (str.length === n) {
    result.push(str.slice());
    return;
  }

  for (let i = 0; i < selection.length; i++) {
    str += selection[i];
    backtrack(selection, str, result, n);
    str = str.substring(0, str.length - 1);
  }
};

console.log(RPS(3));
