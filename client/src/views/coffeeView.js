var CoffeeView = function(){
  this.coffees = [];
}

CoffeeView.prototype.addCoffee = function(coffee) {
  this.coffees.push(coffee);
  this.render(coffee);
}

CoffeeView.prototype.render = function(coffee){
    const ul = document.querySelector('#coffees');
    const li = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = `${coffee.name} - "${coffee.coffee}"`;
    li.appendChild(text);
    ul.appendChild(li);
}

 module.exports = CoffeeView;
