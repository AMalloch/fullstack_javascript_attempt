const CoffeeView = require('./views/coffeeView');
const Request = require('./services/request.js');

const coffeeView = new CoffeeView();
const request = new Request('http://localhost:3000/api/coffees');

const appStart = function(){

}

document.addEventListener('DOMContentLoaded', appStart);
