
//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.checkToppings = function(topping) {
  this.toppings.push(topping);
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
    alert ("please chose your toppings")
  };

  this.sizePrice = price;
  return this.sizePrice;
}

Pizza.prototype.toppingsAmount = function() {
  if (this.toppings.length !== 0) {
    let toppingsPrice = this.toppings.length * 1;
    return toppingsPrice;
  };
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
  let size = document.getElementById("sizes-input").value;
  let toppings = [];
  let checkboxes = document.querySelectorAll('input[name="topping"]:checked');
  checkboxes.forEach(function(checkbox) {
    toppings.push(checkbox.value);
  });
  let pizza = new Pizza(toppings, size);
  let totalCost = pizza.calculateCost();
  displayPrice(totalCost);
}

const reset = function () {
  window.location.reload();
};

window.addEventListener("load", function () {
  document.querySelector("#pizza-form").addEventListener("submit", handlePizzaForm); 
});