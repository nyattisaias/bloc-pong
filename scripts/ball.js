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
  if (didPlayerScore()) {
    updateScore();
    this.xPos = 600;
    this.yPos = 360;
  }
  if (didComputerScore()) {
    updateScore();
    this.xPos = 600;
    this.yPos = 360;
  }
};

var ball = new Ball(600, 360, 10, (0*Math.PI), (2*Math.PI));
