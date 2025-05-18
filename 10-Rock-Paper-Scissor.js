
      let score = JSON.parse(localStorage.getItem('score')) || {
          wins:0,
          looses:0,
          ties:0,
        };
        updateScoreElement();
/*
      if(!score){
        score = {
          wins:0,
          looses:0,
          ties:0,
        };
      }
  */      
      function playGame(playerMove){
      const computerMove=pickComputerMove();
        let result='';

        if (playerMove === 'scissors'){      
              if (computerMove === 'scissors') {result ='Tie';}
              else if (computerMove=== 'rock') {result = 'you loose';}
              else if (computerMove ==='paper') {result = 'you win';}
      }
      else if(playerMove === 'paper'){        
              if (computerMove === 'paper') {result ='Tie';}
              else if (computerMove=== 'scissors') {result = 'you loose';}
              else if (computerMove ==='rock') {result = 'you win';}
            }
      else if(playerMove === 'rock'){
              if (computerMove === 'rock') {result ='Tie';}
              else if (computerMove === 'paper') {result = 'you loose';}
              else if (computerMove ==='scissors') {result = 'you win';}
       }
        
       if (result === 'you win')
       {
        score.wins = score.wins + 1;}
       else if(result ==='you loose')
       {
        score.looses +=1;}
        else if(result === 'Tie')
        {
          score.ties +=1;}
        
          localStorage.setItem('score',JSON.stringify(score));

          updateScoreElement();

          document.querySelector('.js-result').innerHTML =result;

          document.querySelector('.js-move').innerHTML= 
          
          ` you <img src="${playerMove}-emoji.png"class="move-icon">
          <img src="${computerMove}-emoji.png"class="move-icon">
          Computer`;
      }

      function updateScoreElement(){document.querySelector('.js-score').innerHTML = 
          `wins:${score.wins},looses:${score.looses},ties:${score.ties}`;}


      function pickComputerMove()
                        {const randomNumber = (Math.random());
                        let computerMove = '';
                        if(randomNumber >=0 && randomNumber <1/3

                        ) {
                          computerMove = 'rock';
                        }else if (randomNumber >=1/3 && randomNumber <2/3
                        ) {
                          computerMove='paper';
                        }
                        else if(randomNumber >=2/3 && randomNumber <1

                        ) {
                          computerMove='scissors';
                        }


                        return computerMove;
                        }
    
