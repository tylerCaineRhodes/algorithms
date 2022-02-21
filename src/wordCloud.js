const wordCloud = (string) => {
  const regex = /[A-Z\s]/gi, storage = new Map();
  string = string.match(regex).join('').toLowerCase().split(' ');

  string.forEach(word => {
    if(storage.has(word)){
      storage.get(word).val++;
    } else {
      storage.set(word, {val: 1});
    }
  });
  
  return storage;
};

export { wordCloud };
