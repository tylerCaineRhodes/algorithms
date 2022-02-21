function knapsackProblem(items, capacity) {
  //rows - items
  const rows = new Array(items.length + 1);
  //cols - capacities
  const knapSackValues = Array.from(rows, () =>
    new Array(capacity + 1).fill(0)
  );

  for (let i = 1; i < items.length + 1; i++) {
    const [currentWeight, currentValue] = [items[i - 1][1], items[i - 1][0]];

    for (let c = 0; c < capacity + 1; c++) {
      if (currentWeight > c) {
        knapSackValues[i][c] = knapSackValues[i - 1][c];
      } else {
        knapSackValues[i][c] = Math.max(
          knapSackValues[i - 1][c],
          knapSackValues[i - 1][c - currentWeight] + currentValue
        );
      }
    }
  }
  return [
    getKnapSackItems(knapSackValues, items),
    knapSackValues[knapSackValues.length - 1][knapSackValues[0].length - 1],
  ];
}

function getKnapSackItems(knapSackValues, items) {
  const sequence = [];
  let i = knapSackValues.length - 1;
  let c = knapSackValues[0].length - 1;

  while (i > 0 && c > 0) {
    if (knapSackValues[i][c] === knapSackValues[i - 1][c]) {
      i -= 1;
    } else {
      sequence.push(i - 1);
      c -= items[i - 1][1];
      i -= 1;
    }
  }
  return sequence.reverse();
}

export { knapsackProblem };
