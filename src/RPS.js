function RPS_BACKTRACK(n) {
  const result = [];
  const selection = 'RPS';
  backtrack(selection, '', n, result);
  return result;
}

function backtrack(selection, str, n, result) {
  if (str.length === n) {
    result.push(str.slice());
    return;
  }

  for (let i = 0; i < selection.length; i++) {
    str += selection[i];
    backtrack(selection, str, n, result);
    str = str.substring(0, str.length - 1);
  }
}

function RPS(n) {
  const result = [];
  const selection = 'RPS';
  iterate('', selection, n, result);
  return result;
}

function iterate(currentPermutation, selection, n, result) {
  if (currentPermutation.length === selection.length) {
    result.push(currentPermutation);
    return;
  }

  for (let i = 0; i < selection.length; i++) {
    iterate(currentPermutation + selection[i], selection, n, result);
  }
}
console.log(RPS(3));
console.log(RPS_BACKTRACK(3));
