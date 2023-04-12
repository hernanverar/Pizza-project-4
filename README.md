## Title: 
Pizza project
Week 4 Epicodus Independend Code Review

## Description:
This project should demostrate our skills using what we learned during the week, next we created a Pizza website where the user can choose toppings, size and final price. By clicking our buttons you can choose your size and toppings Pizza.

## Technologies Used:
 HTML, CSS, Javascript.

## Describe: Pizza()
Test: "It should return a Pizza object with two properties for toppings and size"
Code: const Pizza = new Pizza(["ham", "pineapple"], "small",);
Expected Output: Pizza { toppings: ["ham", "pineapple"], size: "small" }


## Description: Create constructor function with two properties (toppings, and size)
test: console.log(Pizaz)
code: function Pizaa (toppings, size)
output: function Pizza(toppings, size) {
this.toppings = toppings;
this.size = size;
}
console.log(Pizza);

## Description: Create Pizza prototype function
test: Reload Page
code: Pizza.prototype.toppingsAmount = function()
output: alert ("Please choose your toppings!");

## Description: Create size prices function
test: const largePizza = new Pizza("large");
largePizza.sizePrice();
console.log(largePizza.sizePrice === 20.69);
code: Pizza.prototype.sizePrice = function()
output: True

## Description: Create calculate prices function
test: const myPizza = new Pizza();
code: const totalCost = myPizza.calculateCost(10, 5);
console.log(totalCost);
output: 15

## Known Bugs:
None/

## Licensse

MIT License

Copyright (c) [2023] [Hernan Verar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
