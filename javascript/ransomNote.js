var canConstruct = function (ransomNote, magazine) {
  magazine = magazine.split('');

  for(const letter of ransomNote){
    let targetLetter = magazine.indexOf(letter);
    if(targetLetter !== -1){
      magazine.splice(targetLetter, 1);
    } else {
      return false;
    };
  };
  return true;
};

module.exports = { canConstruct };
