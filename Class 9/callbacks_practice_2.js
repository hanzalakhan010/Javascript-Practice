function wait(time) {
  for (let i = 0; i < time; i++) {
    setTimeout(() => {
      process.stdout.write("#");
    }, 1000);
  }
}

gas_available = true;
beans_avalible = false;
brewCoffee = () => {
  return new Promise((resolve, reject) => {
    console.log("Brewing Coffee for you ## Wait for 5 seconds");
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

grindBeans = () => {
  return new Promise((resolve, reject) => {
    if (beans_avalible) {
      console.log("Grinding Beans ## You may need to wait for 2 seconds");
      setTimeout(() => {
        resolve();
      }, 2000);
    } else {
      reject("Beans are not available, bring Beans");
    }
  });
};
boilWater = () => {
  return new Promise((resolve, reject) => {
    if (gas_available) {
      console.log("Boiling Water ## You may need to wait for 3 seconds");
      setTimeout(() => {
        resolve("");
      }, 3000);
    } else {
      reject("Gas is not available, rejecting");
    }
  });
};

async function makeCoffee() {
  try {
    await boilWater();
    try {
        await grindBeans();
        await brewCoffee();
        console.log("Your coffee is ready");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

makeCoffee();
