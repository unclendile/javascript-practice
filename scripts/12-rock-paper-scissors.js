const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-rock-btn').addEventListener('click',()=>{
  playGame('rock');
});

document.querySelector('.js-paper-btn').addEventListener('click',()=>{
  playGame('paper');
});

document.querySelector('.js-scissors-btn').addEventListener('click',()=>{
  playGame('scissors');
});

document.querySelector('.js-reset-btn').addEventListener('click',()=>{
  showConfirmationMessage();
});

document.querySelector('.js-stop-auto-play-btn').addEventListener('click',()=>{
  autoPlay();
});


window.document.addEventListener('keydown',(event)=>{
  if(event.key === 'r' || event.key === 'R'){
    playGame('rock');
  }
  if(event.key === 'p' || event.key === 'P'){
    playGame('paper');
  }
  if(event.key === 's' || event.key === 'S'){
    playGame('scissors');
  }
  if(event.key === 'a' || event.key === 'A'){
    autoPlay();
  }
  if(event.key === 'Backspace'){
      showConfirmationMessage();
  }
});

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
}



function autoPlay(){ 
  if(!isAutoPlaying){
      intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
    //if(isAutoPlaying){
      document.querySelector('.js-stop-auto-play-btn').innerHTML = `Stop`
    //}
    
  } else{
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-stop-auto-play-btn').innerHTML = `Auto Play`

  }

  
    
}


function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = ``;

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove =`rock`;
  } else if(randomNumber >= 1/3 && randomNumber < 2/3 ){
    computerMove = `paper`;
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = `scissors`;
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === computerMove){
    result = 'Tie!';
  } else if(
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ){
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  if(result === 'You win!'){
    score.wins++;
  } else if(result === 'You lose!'){
    score.losses++;
  } else if(result === 'Tie!'){
    score.ties++;
  }

    localStorage.setItem("score", JSON.stringify(score));

    let resultElem = document.querySelector('.js-results');
    resultElem.innerHTML = `${result}`;

    let moveElem = document.querySelector('.js-moves');
    moveElem.innerHTML = `You <img src="/images/${playerMove}-emoji.png" class="move-icon"/> - <img src="/images/${computerMove}-emoji.png" class="move-icon"/> Computer`;

    
  updateScore();
  
}

function updateScore(){
  let scoreElem = document.querySelector('.js-score');
    scoreElem.innerHTML = `Wins: ${score.wins } Losses: ${score.losses } Ties: ${score.ties}`;
}


function showConfirmationMessage(){
  document.querySelector('.js-confirm').innerHTML = `
    Are you sure you want to reset the score?
    <button class="yes-btn js-yes-btn">Yes</button>
    <button class="no-btn js-no-btn">No</button>
  `;

  document.querySelector('.js-yes-btn').addEventListener('click', () =>{
    resetScore();
    hideConfirmationDialog();
  })

  document.querySelector('.js-no-btn').addEventListener('click', () => {
    hideConfirmationDialog();
  })
}

function hideConfirmationDialog(){
  document.querySelector('.js-confirm').innerHTML = '';
}
  
