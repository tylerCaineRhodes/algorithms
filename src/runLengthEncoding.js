function runLengthEncoding(string) {
  let encoded = '';
  let currentRun = 1;

  for (let i = 1; i < string.length; i++) {
    const prevChar = string[i - 1];
    const currentChar = string[i];

    if (prevChar !== currentChar || currentRun === 9) {
      encoded += currentRun;
      encoded += prevChar;
      currentRun = 0;
    }
    currentRun++;
  }
  encoded += currentRun;
  encoded += string[string.length - 1];
  return encoded;
}
