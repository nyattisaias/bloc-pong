var playerScore = document.getElementById('player-score');
var computerScore = document.getElementById('computer-score');

var didPlayerScore = function() {
  return (ball.xPos - ball.radius > computer.xPos + computer.width);
};

var didComputerScore = function() {
  return (ball.xPos - ball.radius < player.xPos - player.width);
};

var updateScore = function() {
  if (didPlayerScore()) {
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
  }
  if (didComputerScore()) {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
  }
};
