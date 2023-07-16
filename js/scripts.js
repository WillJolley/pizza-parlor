//Business Logic for Pizza 

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

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
  
function handleForm(event) {
  event.preventDefault();
  const toppingSelection = document.querySelectorAll("input[name='toppingz']:checked");
  const toppingSelectionArray = Array.from(toppingSelection);
  const sizeSelection = document.querySelector("input[name='size']:checked");
  
  let newPizza = new Pizza(toppingSelectionArray, sizeSelection.value);
  newPizza.determineCost();

  const p = document.createElement("p");
  p.append("$" + newPizza.cost + ".00");
  document.body.append(p);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleForm)
});