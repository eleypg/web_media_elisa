'use strict';

// 1. FAMILY TREE


function fullname(mom,dad,you){
	console.log(you + ' you are the product of ' + dad + ' and ' + mom);
}

fullname('Liduvina','Alfredo','Elisa');


// 2. DISTANCE BETWEEN TWO POINTS.


function distance(x1,y1,x2,y2){
	var resultx = x2-x1;
	var resulty = y2-y1;
	var cuadrados = (resultx)*(resultx)+(resulty)*(resulty);
	var raiz = Math.sqrt(cuadrados);
	console.log('The distance between A and B is ' + raiz);
}

distance(12,45,80,400);


// 3. MONEY EXCHANGE.


function usd(mxn){
	var result = mxn/19.27;
	console.log(mxn + ' mxn = ' + result + ' usd');
}

function eur(mxn){
	var result = mxn/21.64;
	console.log(mxn + ' mxn = ' + result + ' eur');
}

eur(400);
usd(300);


