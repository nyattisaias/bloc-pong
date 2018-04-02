var animate = window.requestAnimationFrame ||
              function(callback) { window.setTimeout(callback, 1000/60) };

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
}

var step = function() {
  player.render();
  computer.render();
  ball.render();
  animate(step);
};

window.addEventListener('keydown', (event) => {
  player.move();
});
