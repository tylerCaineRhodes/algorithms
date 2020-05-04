const wordCloud = (string) => {
  //turn string into array of lowercase words
  const regex = /[A-Z\s]/gi, storage = new Map();
  string = string.match(regex).join('').toLowerCase().split(' ');
  //iterate over words
  string.forEach(word => {
    if(storage.has(word)){
      storage.get(word).val++;
    } else {
      storage.set(word, {val: 1});
    };
  });
  return storage;
};

module.exports = { wordCloud };
