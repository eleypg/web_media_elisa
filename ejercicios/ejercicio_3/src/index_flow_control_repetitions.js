'use strict';

// 1. AVERAGE MARK.

function gpa(array){
	var average = 0;
	for(var i = 0; i < array.length; i++){
    average += array[i];

	}

	average /= array.length;
	return average;
}

var arr = [7.5, 5, 8];
console.log(gpa(arr));


// 2. PADDING UNDERSCORES.

function padd(u1,u2,msn){
	var stringToReturn = '';
	for(var i= 0; i <=u1; i++){
		stringToReturn += '_';
	}

	stringToReturn += msn;

	for(var j= 0; j <=u2; j++){
		stringToReturn += '_';
	}

	return stringToReturn;
}


console.log(padd(3,5,'Hola mundo'));


// 3. STAR TRIANGLE.

function pattern(symbol,lines){
	var symbolString = '';
	for(var i= 1; i <=lines; i++){
		for(var j = 1; j <= i; j++){
			symbolString += symbol;
		}
		symbolString += '\n';
	}

	return symbolString;

}

console.log(pattern('*',8));