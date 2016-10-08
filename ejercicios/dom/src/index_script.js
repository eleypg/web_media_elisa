'use strict';

//random

function insertRandomDiv(){
	
	var newDiv = document.createElement('div')
	newDiv.className = 'random-div';
	var x = Math.random() * 500;
	var y = Math.random() * 500;

	newDiv.style.left = x + 'px';
	newDiv.style.left = y + 'px';

	var zone = document.getElementById('zone-1');
	zone.appendChild(newDiv);

}

for(var i = 0; i < 200; i++){
	insertRandomDiv();
}

//callback

var button = document.getElementById('button');

var count = 0;
button.addEventListener('click', function(){

	count++;

	var countTxt = document.getElementById('countTxt');
	countTxt.innerHTML = 'Clicks' + count;
});

