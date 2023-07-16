Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should charge a base price of $18 for a Medium, $22 for a Large, or $26 for an X-Large."
Code: 
const myPizza = new Pizza([], "medium");
myPizza.determineCost();
Expected Output: 18

Test: "It should add a dollar to the cost for each topping selected." 
Code: 
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myPizza.determineCost();
Expected Output: 20