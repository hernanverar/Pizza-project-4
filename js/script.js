
//Business Logic


function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
} 

Pizza.prototype.checkedToppings = function() {
  let toppings = 0;
  if (this.toppings === "ham") {
    return ham;
  } else if (this.toppings === "pineapple") {
    return pineapple;
  } else {
    alert ("please add toppings")
  }
}
console.log(numToppings);
//add toppings to Pizza
Pizza.prototype.toppingsAmount = function() {
  if (this.toppings.length != 0){
    let toppingPrice = this.topping.length * 2;
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
  } else if (this.size === "medium" ) {
    price = 18.50;
  } else if (this.size === "large") {
    price = 20.69
  } else {
    alert ("please choose your Pizza size");
  }
  this.sizePrice = price;
  return this.sizePrice;
}

// add Price to our Pizza
Pizza.prototype.calculateCost = function(totalAmount, sizePrice) {
  let totalCost = totalAmount + sizePrice;
  this.calculateCost = totalCost;
  return this.calculateCost;
}

//UI Logic
function displayIn() {
  let size = document.querySelector("sizes-input;checked").value;
  let toppings = [];
  let checkedToppings = document.querySelectorAll(".toppings-input:checked);
  checkedToppings.forEach(function(topping){
    toppings.push(topping.value);
  });
  let pizza = new Pizza(toppings, size);
  let totalAmount = pizza.toppingsAmount();
}

window.addEventListener("load", function () {
  document.getElementById("pizza-parlor").addEventListener("submit", function(){
    e.preventDefault();
    displayIn();
  });
})