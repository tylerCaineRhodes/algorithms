function myAtoi(str: string): number {
  const parsedNum = parseInt(str.trim());

  if (Number.isNaN(parsedNum)) return 0;
  if (parsedNum < 1 && parsedNum < -(2 ** 31)) {
    return -(2 ** 31);
  }
  if (parsedNum > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }
  return parsedNum;
}
