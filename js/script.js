
//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.checkToppings = function() {
    alert("Please add toppings.");
}

Pizza.prototype.toppingsAmount = function() {
  if (this.toppings.length !== 0) {
    let toppingsPrice = this.toppings.length * 2;
    return toppingsPrice;
  } else {
    alert("Please choose your toppings!");
  };
}

Pizza.prototype.sizePrice = function() {
  let price = 0;
  if (this.size === "small") {
    price = 15.00; 
  } else if (this.size === "medium") {
    price = 18.50;
  } else if (this.size === "large") {
    price = 20.69;
  } else {
    alert("Please choose your Pizza size.");
  };
  this.sizePrice = price;
  return this.sizePrice;
}

Pizza.prototype.calculateCost = function() {
  let totalAmount = this.toppingsAmount();
  let sizePrice = this.sizePrice();
  let totalCost = totalAmount + sizePrice;
  this.calculateCost = totalCost;
  return this.calculateCost;
}

function displayPrice(totalCost) {
  const priceDisplay = document.querySelector("#price-display");
  priceDisplay.innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
  priceDisplay.classList.add("text-success");
}

// UI Logic

function handlePizzaForm(event) {
  event.preventDefault();
  let size = document.querySelector("input[name='sizes']:checked").value;
  let checkToppings = document.querySelectorAll(".form-check-input");
  checkToppings.forEach(function(topping){
    if (topping.checked) {
      toppings.push(topping.value);
    }
  });
  let pizza = new Pizza(toppings, size);
  let toppings = pizza.checkToppings();
  pizza.checkToppings();
  let totalCost = pizza.calculateCost();
  displayPrice(totalCost);
}

const reset = function () {
  window.location.reload();
};

window.addEventListener("load", function () {
  document.querySelector("#pizza-parlor-form").addEventListener("submit", handlePizzaForm);  
});