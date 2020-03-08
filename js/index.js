var message = "祝",
	gravity = 0,
	duration = 0.2,
	speed = 0.03,
	radius = 2,
	resolution = 4;

graVal = parseFloat(gravity);
durVal = parseFloat(duration);
spdVal = parseFloat(speed);
radVal = parseFloat(radius);
resVal = parseFloat(resolution);

var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
W = canvas.width = window.innerWidth;
H = canvas.height = window.innerHeight;
gridY = 4, gridX = 4;

type = "ball";

colors = [
	'#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
	'#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
	'#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
	'#FF5722'
];

var word = new Shape(W/2, H/2, message);
word.getValue();

function change(){
	context.clearRect(0, 0, W, H);
	gridX = parseFloat(resolution);
	gridY = parseFloat(resolution);
	word.placement = [];
	word.text = message.value;
	word.getValue();
}

function changeV() {
	graVal = parseFloat(gravity);
	durVal = parseFloat(duration);
	spdVal = parseFloat(speed);
	radVal = parseFloat(radius);
}


(function drawFrame(){
	window.requestAnimationFrame(drawFrame, canvas);
	context.clearRect(0, 0, W, H);

	for(var i=0; i< word.placement.length; i++){
		word.placement[i].update();
	}
}())

//resize
function resize(){
	W = canvas.width = window.innerWidth;
	H = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize, false);
var tem=0;
var inter=setInterval(function(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	W = canvas.width = window.innerWidth;
	H = canvas.height = window.innerHeight;
	gridY = 4, gridX = 4;

	type = "ball";

	colors = [
		'#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
		'#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
		'#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
		'#FF5722'
	];



	tem++;
	if(tem===1){
		message="190734";
	}
	if(tem===2){
		message="所有";
	}
	if(tem===3){
		message="小仙女";
	}
	if(tem===4){
		message="女生节";
	}
	if(tem===5){
		message="快乐!";
		clearInterval(inter);
	}

	var word = new Shape(W/2, H/2, message);
	word.getValue();

	function change(){
		context.clearRect(0, 0, W, H);
		gridX = parseFloat(resolution);
		gridY = parseFloat(resolution);
		word.placement = [];
		word.text = message.value;
		word.getValue();
	}

	function changeV() {
		graVal = parseFloat(gravity);
		durVal = parseFloat(duration);
		spdVal = parseFloat(speed);
		radVal = parseFloat(radius);
	}


	(function drawFrame(){
		window.requestAnimationFrame(drawFrame, canvas);
		context.clearRect(0, 0, W, H);

		for(var i=0; i< word.placement.length; i++){
			word.placement[i].update();
		}
	}())

//resize
	function resize(){
		W = canvas.width = window.innerWidth;
		H = canvas.height = window.innerHeight;
	}

	window.addEventListener('resize', resize, false);
},2000)


