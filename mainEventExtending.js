const PizzaShop = require ("./ExtendingEvent");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();


pizzaShop.on("order",(size, topping)=>{
console.log(`order received! Baking a ${size} pizza with ${topping}`);
drinkMachine.serverDrink(size);
});
pizzaShop.order("large","mushrooms");


pizzaShop.displayOrderNumber();