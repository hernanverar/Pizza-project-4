Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const Pizza = new Pizza(["ham", "pineapple"], "small",);
Expected Output: Pizza { toppings: ["ham", "pineapple"], size: "small" }

//
Description: Create constructor function with two properties (toppings, and size)
test: console.log(Pizaz) 
code: function Pizaa (toppings, size)
output: function Pizza(toppings, size) {
           this.toppings = toppings;
           this.size = size;
          } 
           console.log(Pizza); 

//
Description: Create Pizza prototype function
test: Reload Page
code: Pizza.prototype.toppingsAmount = function()
output: alert ("Please choose your toppings!");

//
Description: Create size prices function

test: const largePizza = new Pizza("large");
largePizza.sizePrice();
console.log(largePizza.sizePrice === 20.69);

code: Pizza.prototype.sizePrice = function()
output: True

Description: Create calculate prices function
test: const myPizza = new Pizza();
code: const totalCost = myPizza.calculateCost(10, 5);
        console.log(totalCost); 
output: 15

Licensse

MIT Copyright () Hernan Verar.