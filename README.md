# _pizza-parlor_

#### By _Will Jolley_

#### _A webpage for ordering a pizza_

https://willjolley.github.io/pizza-parlor/

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_


## Description

_pizza-parlor is a webpage that invites users to order a pizza by selecting a size and toppings, and returns the price of their pizza based on their selections._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser.__

## Known Bugs

* _Unless the page is refreshed, the prices of previously ordered pizzas remain on the page._ 

## License

_e-mail me at yeswilljolley@gmail.com with any issues, questions, ideas, concerns._

Copyright (c) _2023_ _Will Jolley_




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