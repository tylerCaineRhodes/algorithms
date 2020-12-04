function longestSubstringWithoutDuplication(string) {
  const seen = {};
  let longest = [0, 1];
  let startIdx = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in seen) {
      startIdx = Math.max(startIdx, seen[char] + 1);
    }
    seen[char] = i;

    if (longest[1] - longest[0] < i - startIdx) {
      longest = [startIdx, i];
    }
  }
  return string.slice(longest[0], longest[1] + 1);
}
