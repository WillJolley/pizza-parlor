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
    this.cost += 26;
  }
  return this.cost;

  //this.toppings.forEach(function(topping) {
    //this.cost += 1;
  //})
};

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let newPizza = new Pizza();

  const toppingsList = document.getElementsByName("toppingz");
  toppingsList.forEach(function(topping){
    if (topping.checked){
      newPizza.toppings.push(topping.value)
    }
  })
  console.log(newPizza.toppings)
}

