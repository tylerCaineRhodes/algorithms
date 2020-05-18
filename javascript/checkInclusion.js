var checkInclusion = function (s1, s2) {
  let library1 = archive(s1), s1_len = s1.length, s2_len = s2.length;

  for(let i = 0; i <= s2_len - s1_len; i++){
    let sliceyBoy = s2.slice(i, i + s1_len);
    let library2 = archive(sliceyBoy);
    if(compare(library2, library1)){
      return true;
    };
  };
  return false;
};

const archive = (obj) => {
  const library = obj.split('').reduce((acc, key) => {
     acc[key] ? acc[key] += 1 : acc[key] = 1;
     return acc;
  }, {});
  return library;
};

const compare = (snippet, library1) => {
  for(let letter in snippet) {
    if(!library1[letter] || snippet[letter] < library1[letter]) return false;
  };
  return true;
};

module.exports = { checkInclusion };
