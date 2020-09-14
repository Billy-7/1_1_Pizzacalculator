// begin hier je JavaScript commandos

const PizzaS = 7;
const PizzaM = 9;
const PizzaL = 12;

var AantalS = prompt('Goedendag, hoeveel kleine pizzas wilt u hebben?', '0');
document.write ('Small pizzas : ' + AantalS + '<br>' + 'Price : ' + parseInt(AantalS) * PizzaS + '<br>');
var AantalM = prompt('En hoeveel medium pizzas wilt u hebben?', '0');
document.write ('Medium pizzas : ' + AantalM + '<br>' + 'Price : ' + parseInt(AantalM) * PizzaM + '<br>');
var AantalL = prompt('En hoeveel large pizzas wilt u hebben?', '0');
document.write ('Large pizzas : ' + AantalL + '<br>' + 'Price : ' + parseInt(AantalL) * PizzaL + '<br>');

var totaal = AantalS * PizzaS + AantalM * PizzaM + AantalL * PizzaL;

document.write('Total price : ' + totaal);