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
Paddle.prototype.update = function() {
  if ((computer.yPos !== 0 && computer.yPos > 0) ||
  (computer.yPos !== (canvas.height - this.height) &&
  computer.yPos < canvas.height - this.height)) {
    this.yPos = (0.85 * ball.yPos + 0.2 * this.height);
  }
  canvas.width = canvas.width; //resets canvas
};

// disable page scrolling when keyboard is pressed
window.addEventListener("keydown", function(e) {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


var player = new Paddle(20, 320, 20, 100);
var computer = new Paddle(1160, 290, 20, 100);
