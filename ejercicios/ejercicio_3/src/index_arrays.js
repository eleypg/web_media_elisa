'use strict';

// 1. FIRST ELEMENT.

function rearray(array,numberOfNewArray){

	var newArray = [];
	while(newArray.length < numberOfNewArray){
		newArray.push(array[newArray.length]);
	}
	return newArray;

}
var arr = ['33', 'Casa', 'Mononucleosis', 'Salmonela', '22'];
console.log(rearray(arr,3).toString());




// 2. JOIN ALL.

function join(array, symbol){
	var newString = '';
	for(var i=0; i < array.length-1; i++){
		newString += array[i] + symbol;
	}
	newString += array[array.length-1];

	return newString;
}


console.log(join(arr,' & '));


// 3. REVERSE.

function reverseflash(array){
	var newArray = [];
	for(var i = array.length-1; i >= 0; i--){
		newArray.push(array[i]);
	}
    return newArray;

}

console.log(reverseflash(arr));