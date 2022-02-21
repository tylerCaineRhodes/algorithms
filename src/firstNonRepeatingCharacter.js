function firstNonRepeatingCharacter(string) {
  const storage = {};
  for(const char of string) storage[char] ? storage[char] += 1 : storage[char] = 1;
  for(const key in storage) if(storage[key] === 1) return string.indexOf(key);
  return -1;
}