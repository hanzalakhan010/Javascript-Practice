// Morning Coffee Maker
// Create promises that:
// Boil water (3 seconds) → Grind beans (2 seconds) → Brew coffee (5 seconds)
// Serve only if all steps complete successfully

gas_available = true;
beans_avalible = true;
brewCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Brewing Coffee for you , wait for 5 seconds");
    },5000)
  });
};

grindBeans = () => {
  return new Promise((resolve, reject) => {
    if (beans_avalible) {
      setTimeout(() => {
        resolve("Grinding Beans, you may need to wait for 2 seconds");
      }, 2000);
    } else {
      reject("Beans are not available, bring Beans");
    }
  });
};
boilWater = () => {
  return new Promise((resolve, reject) => {
    if (gas_available) {
      setTimeout(() => {
        resolve("Boiling Water, you may need to wait for 3 seconds");
      }, 3000);
    } else {
      reject("Gas is not available, rejecting");
    }
  });
};

boilWater()
  .then((msg) => {
    console.log(msg);
    return grindBeans();
  })
  .then((msg) => {
    console.log(msg);
    return brewCoffee();
  })
  .then((msg) => console.log(msg));
