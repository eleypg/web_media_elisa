/**
 * Chapter 4. Parallax.
 *
 * Parallax from center of container.
 */
'use strict';

/*************************
 * Functions declaration *
 *************************/

function onMouseMove ( evt ) {

  // Get the dimension of the container
  var mainContainer = document.getElementById('main-container');
  var w = mainContainer.offsetWidth;
  var h = mainContainer.offsetHeight;

  // Get the difference from the mouse to the center of the container
  var mX = evt.offsetX - (w / 2.0);
  var mY = evt.offsetY - (h / 2.0);

  // Iterate through all the layers getting node array with jQuery
  var layers = document.getElementsByClassName('layer');
  for (var i = 0, len = layers.length; i < len; i++) {
    var layer = layers[i];

    // Get the amount of movement of the layer, the or ( || ) operator help
    // us to set 0 if the attr is undefined
    var amtX = parseFloat(layer.getAttribute('data-x') || 0);
    var amtY = parseFloat(layer.getAttribute('data-y') || 0);

    // Multiply and assign the translate
    var x = mX * amtX;
    var y = mY * amtY;
    layer.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0px)';
  }
}

/***************
 * Main script *
 ***************/

document.addEventListener('DOMContentLoaded', function () {
  var mainContainer = document.getElementById('main-container');
  mainContainer.addEventListener('mousemove', onMouseMove);
});
