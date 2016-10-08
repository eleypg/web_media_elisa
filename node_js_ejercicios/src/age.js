'use strict';

function calcage (now, birth) {
  var result = now - birth;
  console.log(result + " o " + (result-1));
}

calcage(2016,1945);