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

const appStart = function(){
  request.get(getCoffeesRequestComplete);
}


document.addEventListener('DOMContentLoaded', appStart);
