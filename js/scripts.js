//Business Logic for Pizza 

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

let newPizza = new Pizza(["pepperoni", "mushrooms"], "medium")

Pizza.prototype.determineCost = function() {
  if (this.size === "medium") {
    this.cost += 18;
  } else if (this.size === "large") {
    this.cost += 22;
  } else {
    this.cost += 26
  }
};

