var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');

function Paddle(xPos, yPos, width, height) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.width = width;
  this.height = height;
  this.speed = 10;
}

Paddle.prototype.render = function() {
  context.fillStyle = 'black';
  context.fillRect(this.xPos, this.yPos, this.width, this.height);
};

Paddle.prototype.move = function() {
  if (event.keyCode === 38){
    if (player.yPos !== 0){
      this.yPos -= this.speed;
    }
  }
  if (event.keyCode == 40) {
    if (player.yPos !== (canvas.height-100)) {
      this.yPos += this.speed;
    }
  }
  canvas.width = canvas.width; //resets canvas
};

function Ball(xPos, yPos, radius, startAngle, endAngle) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.radius = radius;
  this.startAngle = startAngle;
  this.endAngle = endAngle;
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.xPos, this.yPos, this.radius, this.startAngle, this.endAngle);
  context.fillStyle = 'blue';
  context.fill();
};

var player = new Paddle(20, 320, 20, 100);
var computer = new Paddle(1160, 320, 20, 100);
var ball = new Ball(600, 360, 8, (0*Math.PI), (2*Math.PI));
