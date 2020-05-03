var canConstruct = function (ransomNote, magazine) {
  magazine = magazine.split('');
  //iterate over random note
  for(const letter of ransomNote){
    let targetLetter = magazine.indexOf(letter);
    //for each index, check if exists in magazine
    if(magazine.indexOf(letter) !== -1){
      //if it does, delete from magazine and continue
      magazine.splice(targetLetter, 1);
      //else, return false
    } else {
      return false;
    };
  };
  //return true
  return true;
};


module.exports = { canConstruct };
