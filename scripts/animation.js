var stopAnimation = false;
var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var startButton = document.getElementById('startButton');

var animate = window.requestAnimationFrame ||
              function(callback) { window.setTimeout(callback, 1000/60) };


window.onload = function() {
  document.body.appendChild(canvas);
  computer.render();
  player.render();
  ball.render();
}

var step = function() {
  ball.move();
  computer.update();
  player.render();
  ball.render();
  computer.render();
  if (!stopAnimation) {
    animate(step);
  }
};

window.addEventListener('keydown', (event) => {
  player.move();
});

startButton.addEventListener('click', (event) => {
  stopAnimation = false;
  step();
});
