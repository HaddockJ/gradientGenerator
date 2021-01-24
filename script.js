var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var css = document.querySelector('h3');
var body = document.getElementById('gradient');
var button = document.querySelector('button');

function setRandomColor() {
	color1.value = "#" + randomHex(0);
	color2.value = "#" + randomHex(0);

}

function randomHex() {
	return Math.random().toString(16).substr(2, 6);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = color1.value + ' ' + color2.value;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
window.addEventListener('load', setRandomColor);
window.addEventListener('load', setGradient);
button.addEventListener('click', setRandomColor)
button.addEventListener('click', setGradient);

// Math.random().toString(16).substr(2, 6);
/* on load need set color1.value to random hex and color2.value to random hex
? use setAttribute

function setRandomColor() {
	input.setAttribute('value', randomHex)
}*/
