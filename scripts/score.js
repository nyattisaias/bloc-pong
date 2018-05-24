var playerScore = document.getElementById('player-score');
var computerScore = document.getElementById('computer-score');

var didPlayerScore = function() {
  return (ball.xPos - ball.radius > computer.xPos + computer.width);
};

var didComputerScore = function() {
  return (ball.xPos + ball.radius < player.xPos - player.width);
};

var updateScore = function() {
  if (didPlayerScore()) {
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    stopAnimation = true;
    // allows continuation of animation after each point
    //setTimeout(function() { stop = false}, 1);
  }
  if (didComputerScore()) {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    stopAnimation = true;
    //setTimeout(function() { stop = false}, 1);
  }

  if (playerScore.innerHTML == 11) {
    document.getElementById('win-message').removeAttribute('hidden');
    // allows score to change and message to display before alerting
    setTimeout(function() { alert('Game will restart when you select "OK"'); }, 20);
    location.reload();
  }

  if (computerScore.innerHTML == 11) {
    document.getElementById('loss-message').removeAttribute('hidden');
    setTimeout(function() { alert('Game will restart when you select "OK"'); }, 20);
    location.reload();
  }
};
