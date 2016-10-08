'use strict';

function calcarea(radio){
  var pi = 3.1416;
  var result = (pi * radio * radio);
  return result;
}

var area = calcarea(10);
console.log(area);