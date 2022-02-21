var isValid = function (s) {
  const stack = [];
  const dictionary = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let bracket of s) {
    if (bracket in dictionary) {
      if (dictionary[bracket] !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(bracket);
    }
  }
  return stack.length === 0;
};
