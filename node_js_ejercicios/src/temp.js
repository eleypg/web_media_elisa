'use strict';

function convertFtoC (F){
  var result = ((F-32)*5) / 9;
  return result;
}

var celsi = convertFtoC(95);
console.log(celsi);