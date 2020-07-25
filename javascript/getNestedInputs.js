const getValues = (inputObjects) => {
  const root = {};

  inputObjects.forEach((obj) => {
    const classes = obj['name'].split('.');
    let curr = root;

    for (let i = 0; i < classes.length - 1; i++) {
      curr[classes[i]] = curr[classes[i]] || {};
      curr = curr[classes[i]];
    }
    curr[classes[classes.length - 1]] = obj['value'];
  });
  return root;
};

const expected = {
  foo: {
    bar: {
      baz: 'hello',
      quip: 'Hi!',
    },
    baz: 'goodmorning',
  },
  bear: {
    baz: 'YO.',
  },
};

const inputs = [
  { name: 'foo.bar.baz', value: 'Hello' },
  { name: 'foo.bar.qyp', value: 'Hi!' },
  { name: 'foo.baz', value: 'Good morning.' },
  { name: 'bear.baz', value: 'YO.' },
];

console.log(getValues(inputs));
