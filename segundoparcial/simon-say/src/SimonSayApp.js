(function ( global ) {
  'use strict';

  function playCard ( index, sequence, callback ) {
    if (index === sequence.length) {
      callback();
      return;
    }

    var idSeq = sequence[index];

    $('.sequence-btn[id-seq="' + idSeq + '"]')
    .animate({
      opacity: 1.0,
    }, 200)
    .delay(1100)
    .animate({
      opacity: 0.3,
    }, 200, function () {
      playCard(index + 1, sequence, callback);
    });
  }

  function playSequence ( sequence, callback ) {
    playCard(0, sequence, callback);
  }

  function randomBox(){
    var colourList = ['r','g','b','p'];
    var index = Math.floor(Math.random()*4);
    return colourList[index];
  }



  var app = {
    start: function () {
      var sequence = [];
      gameIsOn = true;
      while(gameIsOn){
        sequence.push(randomBox());
        playSequence(sequence, function () {
          var index = 0

          $('.sequence-btn').onclick =  function () { gameIsOn = false; window.alert('YOU LOST'); }
          $('#' + sequence[index]).onclick = function () {
            if(index = sequence.length){
              
            }
          }
          /*g -> fail
          p -> fail
          b -> fail
          r -> update the listeners; check if we finished the sequence; if yes were done here; if not, increment the index*/







          $("#").onclick = 
        })
      }
    }
  };

  // Set global
  global.app = app;
})(this);




