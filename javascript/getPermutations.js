function getPerms(string) {
  if (string.length <= 1) {
    return new Set([string]);
  }
  let lastChar = string.slice(-1);
  let rest = string.slice(0, -1);
  let allPermsButLast = getPerms(rest);

  let perms = new Set();
  allPermsButLast.forEach((key) => {
    for (let i = 0; i <= rest.length; i++) {
      let newString = key.slice(0, i) + lastChar + key.slice(i);
      perms.add(newString);
    }
  });
  return perms;
}
console.log(getPerms('hello'));
