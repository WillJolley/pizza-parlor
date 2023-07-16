//Business Logic for Pizza 

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

let newPizza = new Pizza(["pepperoni", "mushrooms", "anchovies"], "XL")

Pizza.prototype.determineCost = function() {
  if (this.size === "medium") {
    this.cost += 18;
  } else if (this.size === "large") {
    this.cost += 22;
  } else {
    this.cost += 26;
  };
  
  this.cost += this.toppings.length;

  return this.cost;
};

//UI Logic
  
window.onload = function () {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let newPizza = new Pizza();
    const toppingSelection = document.querySelectorAll("input[name="toppingz"]:checked").value;
    const sizeSelection = document.querySelector("input[name="size"]:checked").value;
  });
}

