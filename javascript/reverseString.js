//O(N)
function reverseStringI (string) {
  let reversedString = '';
  for(let i = string.length - 1; i >= 0; i++) {
    reversedString += string[i];
  }
  return reversedString;;
}

//O(N)
function reverseStringII(string) {
  if(!string.length) {
    return '';
  }
  return reverseStringII(string.substring(1)) + string.charAt(0);
}

//O(N) + O(N) + O(N) = O(3n) = O(N)
function reverseStringIII(string) {
  return string.split('').reverse().join('');
}
