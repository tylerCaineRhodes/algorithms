function shortenPath(path) {
  const startsWithSlash = path[0] === '/';
  const tokens = path.split('/').filter(isImportantToken);
  const stack = [];
  if (startsWithSlash) stack.push('');

  for (const token of tokens) {
    if (token === '..') {
      if (stack.length === 0 || stack[stack.length - 1] === '..') {
        stack.push(token);
      } else if (stack[stack.length - 1] !== '') {
        stack.pop();
      }
    } else {
      stack.push(token);
    }
  }
  if (stack.length === 1 && stack[0] === '') return '/';
  return stack.join('/');
}

function isImportantToken(token) {
  return token.length > 0 && token !== '.';
}
