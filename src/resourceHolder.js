const createResourceHolder = (population = 0, food = 0, wood = 0, iron = 0) => {
  const resourceHolder = {
    population: population,
    food: food,
    wood: wood,
    iron: iron,
  };

  resourceHolder.canAfford = (transaction) => {
    for (const resource in transaction) {
      if (resourceHolder[resource] < transaction[resource]) {
        return false;
      }
    }

    return true;
  }

  resourceHolder.addResources = (resources) => {
    for (const resource in resources) {
      resourceHolder[resource] += resources[resource];
    }
  }

  resourceHolder.takeResources = (resources) => {
    for (const resource in resources) {
      resourceHolder[resource] -= resources[resource];
    }
  }

  resourceHolder.attemptTransaction = (secondParty, offer, prise) => {
    if (!resourceHolder.canAfford(offer)) {
      console.log("Can not afford this offer");
      return;
    }

    if (!secondParty.canAfford(prise)) {
      console.log("Second party can not afford their offer");
      return;
    }

    secondParty.takeResources(prise);
    resourceHolder.addResources(prise);

    resourceHolder.takeResources(offer);
    secondParty.addResources(offer);

    console.log(`Trading ${JSON.stringify(offer)} for ${JSON.stringify(prise)}`);
  }

  return resourceHolder;
};
