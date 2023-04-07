
//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
} 
console.log("size");

//add toppings to Pizza
Pizza.prototype.toppingsAmount = function() {
  if (this.toppings.length != 0){
    let toppingPrice = this.topping.length *1;
    return toppingPrice;
  } else {
    alert ("Please choose your toppings!");
  }
}
console.log("toppingsAmount");