'use strict';

// 1. RECIPE CARD.

var receta = {
	Title       : 'Pastel fácil',
	ingredientes: {'lemon':8, 'leche condensada':1, 'leche evaporada':1, 'galleta maria': 2},
	dificultad  : 'Kinder fácil',
	pasos       : ['Se extrae todo el jugo de los ocho limones retiramos huesitos lo añadimos a la licuadora o batidora,'+
                    'se agregan ahí mismo ambas leches (condensada y evaporada) se licua bien.',
	               'En un refractario amplio colocamos una cama de galletas maría y se le añade la mezcla luego repetimos'+
                    'el proceso con una nueva capa de galletas y más mezcla y así sucesivamente hasta terminar con todas las galletas y la mezcla.',
	               'Metemos al congelador y que que esta bien frío estará listo para degustar, para servir podemos adornar con ralladura de limón o rodajas.']
}; 

console.log(JSON.stringify(receta));


// 2. CONTACT DATABASE.

var contactDatabase = [ {

    'name': 'Liduvina Perezgomez', 
    'home phone': 6121210831, 
    'work phone' : 'n/a',
    'cellphone': 6121522143,
    'address': {street: 'Miraflores', number: 212, country: 'Mexico'}
},
{
    'name': 'Alfredo Hernandez', 
    'home phone': 6121210831, 
    'work phone' : 'n/a',
    'cellphone': 6121521192,
    'address': {street: 'Miraflores', number: 212, country: 'Mexico'}
},

{
    'name': 'Sonia Rodriguez', 
    'home phone': 6121202933, 
    'work phone' : 'n/a',
    'cellphone': 6121492173,
    'address': {street: 'Rovira', number: 3445, country: 'España'}
},

{
    'name': 'Michael Barras', 
    'home phone': 'n/a', 
    'work phone' : 'n/a',
    'cellphone': 334871993,
    'address': {street: 'Johnson av', number: 32, country: 'US'}
},

{
    'name': 'Alisa <3', 
    'home phone': 'n/a', 
    'work phone' : 'n/a',
    'cellphone': 5543869339,
    'address': {street: 'Tamaulipas', number: 236, country: 'Mexico'}
},

];

function nameFilter(contactDatabase,initial){
  var filteredNames = [];
  for(var i = 0; i < contactDatabase.length; i++){    
    if(initial == contactDatabase[i].name.charAt(0)){
      filteredNames.push(contactDatabase[i].name);
    }
  } 
return filteredNames;
}

console.log(nameFilter(contactDatabase,'A'));



// 3. POINTS.


var point1 = {'x': 33, 'y': 203};
var point2 = {'x': 24, 'y': 888};
//a
function equals(point1,point2){
  return (point1.x == point2.x && point1.y == point2.y);
}
console.log(equals(point1,point2));

//b
var point3 = {'x': 20, 'y': 45, 'distanceTo': function(point){
  return Math.sqrt(Math.pow((point.x - this.x),2)+Math.pow((point.y - this.y),2));
  }
}
console.log(point3.distanceTo(point1));














