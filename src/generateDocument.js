function generateDocument(characters, document) {
  if (characters.length < document.length) return false;
  const charsHash = countChars(characters);
  const docHash = countChars(document);

  for (const char in docHash) {
    if (!(char in charsHash) || charsHash[char] < docHash[char]) {
      return false;
    }
  }
  return true;
}

function countChars(string) {
  return string.split('').reduce((acc, char) => {
    !acc[char] ? (acc[char] = 1) : acc[char]++;
    return acc;
  }, {});
}
