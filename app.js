function onReady() {

  var canvas = document.getElementById('screen');
  var context = canvas.getContext('2d');

  function Paddle(xPos, yPos, width, height){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.render = function(){
      context.fillRect(xPos, yPos, width, height);
    };
  }

  function Ball(xPos, yPos, radius, startAngle, endAngle){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.render = function(){
      context.beginPath();
      context.arc(xPos, yPos, radius, startAngle, endAngle);
      context.fillStyle = 'blue';
      context.fill();
    };
  }

  var player = new Paddle(800, 20, 100, 20);
  var computer = new Paddle(800, 860, 100, 20);
  var ball = new Ball(850, 420, 10, (0*Math.PI), (2*Math.PI));

  player.render();
  computer.render();
  ball.render();
}

window.onload = function() {
  onReady();
};
