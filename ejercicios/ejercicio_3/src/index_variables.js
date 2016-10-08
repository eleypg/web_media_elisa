'use strict';

// 1. MONEY EXCHANGE.

var mxn = 800;

var usd = mxn / 19.27;

var eur = mxn / 21.64;

console.log(mxn + ' mxn' + ' = ' + usd + ' usd');
console.log(mxn + ' mxn' + ' = ' + eur + ' eur');


// 2. SALES WITH DISCOUNTS.

var blueDress = 500;
var redSocks = 100;
var whiteT = 120;
var yellowCoat = 800;
var dressDiscount = blueDress*0.10;
var sockDiscount = redSocks*0.50;

var total = whiteT + yellowCoat + (blueDress-dressDiscount) + (redSocks-sockDiscount);
console.log('Total de compra: ' + total);


