var myAtoi = function (str) {
  let sumString = '',
    result = 0,
    type,
    typeDeclareCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (typeDeclareCount > 1) {
      return 0;
    } else if (
      (str[i] === '0' && str[i + 1] === ' ') ||
      (str[i] === '0' && str[i + 1] === '+') ||
      (str[i] === '0' && str[i + 1] === '-')
    ) {
      return 0;
    } else if (
      (str[i] === ' ' && sumString.length === 0) ||
      (str[i] === '0' && sumString.length === 0)
    ) {
      continue;
    } else if (
      str[i] === '-' &&
      sumString.length === 0 &&
      !Number.isNaN(parseInt(str[i + 1]))
    ) {
      type = 'negative';
      typeDeclareCount++;
    } else if (
      str[i] === '+' &&
      sumString.length === 0 &&
      !Number.isNaN(parseInt(str[i + 1]))
    ) {
      type = 'positive';
      typeDeclareCount++;
      continue;
    } else if (!Number.isNaN(parseInt(str[i]))) {
      sumString += str[i];
    } else {
      break;
    }
  }

  if (sumString.length > 0) {
    result = parseInt(sumString);
  }

  if (type === 'negative' && -Math.abs(result) < (-(2 ** 31))) {
    return (-(2 ** 31));
  } else if (
    (type === 'positive' || type === undefined) &&
    Math.abs(result) > (2 ** 31) - 1
  ) {
    return (2 ** 31) - 1;
  }

  if (type === 'negative') {
    return -Math.abs(result);
  } else if (Number.isNaN(result)) {
    return 0;
  } else {
    return result;
  }
};

export { myAtoi };
