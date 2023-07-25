# _pizza-parlor_

#### By _Will Jolley_

#### _A webpage for ordering a pizza_

https://willjolley.github.io/pizza-parlor/

## Technologies Used

* Javascript
* HTML
* CSS


## Description

pizza-parlor is a webpage that invites users to order a pizza by selecting a size and toppings, and returns the price of their pizza based on their selections.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* Unless the page is refreshed, the prices of previously ordered pizzas remain on the page.

## License

e-mail me at yeswilljolley@gmail.com with any issues, questions, ideas, concerns.

MIT

Copyright (c) 2023 Will Jolley




## TDD

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