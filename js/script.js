
//Business Logic


function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
} 

//add toppings to Pizza
Pizza.prototype.toppingsAmount = function() {
  if (this.toppings.length != 0){
    let toppingPrice = this.topping.length *1;
    return toppingPrice;
  } else {
    alert ("Please choose your toppings!");
  };
}
// add size prices to our pizza
Pizza.prototype.sizePrice = function() {
  let price = 0;
  if (this.size === "small") {
    price = 15.00; 
  } else if (this.size === "medium") {
    price = 18.50;
  } else if (this.size === "large") {
    price = 20.69
  }
  this.sizePrice = price;
  return this.sizePrice;
}
// const largePizza = new Pizza("large");
// largePizza.sizePrice();
// console.log(largePizza.sizePrice === 20.69);
