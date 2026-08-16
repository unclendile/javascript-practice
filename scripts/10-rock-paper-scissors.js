const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };


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

      