function maximumContainers(scenarios) {
  for (let scenario of scenarios) {
    const [budget, cost, containerCost] = scenario.split(' ').map((val) => parseInt(val));
    let initialNumberOfContainers = Math.floor(budget / cost);
    let totalContainers = initialNumberOfContainers;
    let currentNumberOfContainers = initialNumberOfContainers;

    while (currentNumberOfContainers >= containerCost) {
      let numberOfContainersThatCanBuy = Math.floor(currentNumberOfContainers / containerCost);
      let remainderContainers = currentNumberOfContainers % containerCost;

      totalContainers += numberOfContainersThatCanBuy;
      currentNumberOfContainers = numberOfContainersThatCanBuy + remainderContainers;
    }
    console.log(totalContainers);
  }
}
