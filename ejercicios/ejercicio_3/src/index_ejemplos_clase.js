'use strict';

// return max, ejemplo

function max (a,b){
  if(a > b) {
  	return a;
  }

  return b;
}

console.log(max(4,20));


// word translate


function wordTrans(id){

	if(id === 'it'){
		return 'non mangiare tutti i funions';
	} else if(id === 'bul'){
		return 'не едят все фунионc';
	} else if(id === 'es'){
		return 'No te comas todos los funions';
	} else{
		return 'INVALID';
	}
}

console.log(wordTrans('it'));


// calif usa

function grade (cal){
	if(cal <= 10 && cal >= 9){
		return 'A';
	} else if (cal <9 && cal >= 7){
    return 'B';
	} else if (cal <7 && cal >=5){
		return 'C';
	} else if (cal < 5){
		return 'F';
	} else {
		return 'invalid';
	}
}

console.log(grade(8.6));


// while cuenta de 0 a 20 los que sean divisibles entre n

var count = 0;
while (count <= 20){
	if(count % 4 === 0){
		console.log(count);
	}

	count++;
}



for (var count = 0; count <= 100; count++) {
	if (count % 8 === 0){
		console.log(count);
	}
}



// funcion tabla de mult

function tabla(n){
	for( var i = 0; i <= 10; i++){
		var result = i*n;
		console.log(i + ' * ' + n + ' = ' + result);
	}
}

// va a mostrar las tabla del 0 al 10, dos iteraciones suceden
for (var j=0; j<=10; j++){
	tabla(j);
}


function add(m){
	var ac = 0;
	for(var i= 0; i <=m; i++){
		ac = ac+i;
	}
}

console.log(add(3));



//methods

var myCat = {
	name   : 'Misifus',
	type   : 'cat',
	age    : 1,
	meow   : function(){
		console.log('meowww');
	}
}

myCat.meow();


// callbacks script

var button = document.getElementById('button');

var count = 0;
button.addEventListener('click', function(){

	count++;

	console.log('clicks' + count);
})






