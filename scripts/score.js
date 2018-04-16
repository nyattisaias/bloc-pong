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

  if (playerScore.innerHTML == 11) {
    // allows score to change before ending game
    setTimeout(function() {alert("great you won");}, 0);
    location.reload();
  }

  if (computerScore.innerHTML == 11) {
    setTimeout(function() {alert("hah you lost");}, 0);
    location.reload();
  }
};
