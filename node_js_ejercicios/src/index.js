'use strict';

function sayHello (){
  console.log('HELLO WORLD');
}

sayHello();
sayHello();

function addNumbers (num1, num2) {
	var result = num1 + num2;
	console.log(num1 + ' + ' + num2 + ' = ' + result);
}

addNumbers(10, 4);
addNumbers(1032.4, 4213);

function mult (n1, n2){
	var result = n1 * n2;
	console.log(result);
}

mult(5, 9);


function addValues (num1, num2) {
	var result = num1 + num2;
	return result;
}

var sum = addValues(4,75);
console.log(sum);

var biggerSum = addValues(addValues(5,6), addValues(10,4));
console.log(biggerSum); 