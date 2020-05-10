var findJudge = function (N, trust) {
  if (trust.length === 0) {
    return 1;
    
  } else if (trust.length < N - 1) {
    return -1;
  }

  const { trusting, trusted } = trust.reduce((acc, duple) => {
      if (!acc.trusting[duple[0]]) {
        acc.trusting[duple[0]] = 1;
      } else {
        acc.trusting[duple[0]]++;
      }
      if (!acc.trusted[duple[1]]) {
        acc.trusted[duple[1]] = 1;
      } else {
        acc.trusted[duple[1]]++;
      }
      return acc;
    },
    {
      trusting: {},
      trusted: {},
    }
  );

  for (let people in trusted) {
    if (trusted[people] === N - 1 && !trusting.hasOwnProperty(people)) {
      return parseInt(people);
    }
  }
  return -1;
};

module.exports = { findJudge };
