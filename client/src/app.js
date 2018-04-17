const CoffeeView = require('./views/coffeeView');
const Request = require('./services/request.js');

const coffeeView = new CoffeeView();
const request = new Request('http://localhost:3000/api/coffees');


const getCoffeesRequestComplete = function(allCoffees){
  console.log(allCoffees);
  for(coffee of allCoffees){
    coffeeView.addCoffee(coffee);
  };
};

const createButtonClicked = function(event){
  // prevent default will just stop a page refreshing
  event.preventDefault();
  console.log("Submit button clicked!");

  const nameInputValue = document.querySelector("#name").value;
  const coffeeInputValue = document.querySelector("#coffee").value;

  const coffeeToSend = {
    name: nameInputValue,
    coffee: coffeeInputValue
  };

  request.post(createRequestComplete, coffeeToSend);
};

const createRequestComplete = function(responce){
  coffeeView.addCoffee(responce);
  console.log(responce);
}

const appStart = function(){
  const createCoffeeButton = document.querySelector("#submit-coffee");
  createCoffeeButton.addEventListener("click", createButtonClicked);
  request.get(getCoffeesRequestComplete);
}


document.addEventListener('DOMContentLoaded', appStart);
