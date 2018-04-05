var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');

function Paddle(xPos, yPos, width, height) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.width = width;
  this.height = height;
  this.speed = 25;
}

Paddle.prototype.render = function() {
  context.fillStyle = 'black';
  context.fillRect(this.xPos, this.yPos, this.width, this.height);
};

Paddle.prototype.move = function() {
  if (event.keyCode === 38){
    if (player.yPos !== 0 && player.yPos > 0){
      this.yPos -= this.speed;
    }
  }
  if (event.keyCode == 40) {
    if (player.yPos !== (canvas.height - this.height) &&
        player.yPos < canvas.height - this.height) {
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
  this.speedX = 5;
  this.speedY = 5;
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.xPos, this.yPos, this.radius, this.startAngle, this.endAngle);
  context.fillStyle = 'blue';
  context.fill();
};

Ball.prototype.move = function() {
  this.yPos -= this.speedY;
  this.xPos -= this.speedX;
  if ((this.yPos - this.radius) === 0 || (this.yPos + this.radius) === canvas.height) {
    this.speedY = -this.speedY;
  }
  if (
    //check player collisions
    (this.xPos - this.radius) === (player.xPos + player.width) &&
    (this.yPos > (player.yPos - this.radius) &&
    this.yPos < (player.yPos + player.height + this.radius)) ||
    //check computer collisions
    (this.xPos - this.radius) === (computer.xPos - computer.width) &&
    (this.yPos > (computer.yPos - this.radius) &&
    this.yPos < (computer.yPos + computer.height + this.radius))
  ) {
    this.speedX = -this.speedX;
  }
  canvas.width = canvas.width; //resets canvas
};

var player = new Paddle(20, 320, 20, 100);
var computer = new Paddle(1160, 290, 20, 100);
var ball = new Ball(600, 360, 10, (0*Math.PI), (2*Math.PI));
