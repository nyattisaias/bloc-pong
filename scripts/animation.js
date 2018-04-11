var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');

var animate = window.requestAnimationFrame ||
              function(callback) { window.setTimeout(callback, 1000/60) };

var button = document.getElementById('startButton');


window.onload = function() {
  document.body.appendChild(canvas);
  computer.render();
  player.render();
}

var step = function() {
  ball.move();
  computer.update();
  player.render();
  ball.render();
  computer.render();
  animate(step);
};

window.addEventListener('keydown', (event) => {
  player.move();
});
