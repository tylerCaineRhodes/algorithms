function caesarCipherEncryptor(string, key) {
  let newString = '';
  const newKey = key % 26;

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let newCode = charCode + newKey;

    if (newCode <= 122) {
      newString += String.fromCharCode(newCode);
    } else {
      let adjustedCode = 96 + (newCode % 122);
      newString += String.fromCharCode(adjustedCode);
    }
  }
  return newString;
}
