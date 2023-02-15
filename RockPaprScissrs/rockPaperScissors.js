var cpuScore = 0;
var playerScore = 0;
// function play(){
    console.log(cpuScore);
    console.log(playerScore);

    function getComputerChoice() {
        let random = Math.floor(Math.random() * 3)+1;
        return random;
    }

    var num = getComputerChoice();

    const rpp = ["Rock", "Scissor", "Paper"]

    function computerHand(num){
        var cpuHand;
        if(num === 1) {
            cpuHand = "Rock";
        }        
        else if (num === 2) {
            cpuHand = "Paper";
        } 
        else {
            cpuHand = "Scissor";
        }    
        console.log(cpuHand);
        return cpuHand;
    }



    //assign incremental integer to array counter
    function assignDigit(assign){
        let digit;
        if(assign === "Rock"){
            digit = 0;
        } else if (assign === "Paper"){
            digit = 1;
        } else if (assign === "Scissor"){
            digit = -1;
        }
        return digit;
    }

    //iterate through an array and return if won or lost
    function playRound(array, digit, playerHand, cpuHand,cpuScore, playerScore){

        let i = 0;
        while(cpuHand !== array[i]) {
            i++;
            digit++;
        }
        let verdict = "";
        if (digit == 2 || digit == -1) {
            verdict = "You lose! " + array[i] + " beats " + playerHand;
            cpuScore++;
        } else if (digit == 1) {
            verdict = "You win! " + playerHand + " beats " + array[i];
            playerScore++;
        } else { // 4 is tie. 3 is tie. 
            verdict = "It's a tie " + playerHand + " is tied with " + array[i];
        }

        const container = document.querySelector('#result');
        const content = document.createElement('div');
        content.textContent = verdict;

        container.appendChild(content);
      
        getComputerChoice();
        return;
    }

    if(playerScore || cpuScore !== 5) {
        
        const btn = document.querySelector('#btn-r'); //reference to button
        btn.addEventListener('click', () => {  //when clicked on, do...
            var num = getComputerChoice();
            playerHand = 'Rock';
            let digit = assignDigit(playerHand); //assign a specific digit to the playerHand
            playRound(rpp, digit, playerHand, computerHand(num),cpuScore,playerScore);
        
        });
        const btn1 = document.querySelector('#btn-p');
        btn1.addEventListener('click', () => {  
            var num = getComputerChoice();
            playerHand = 'Paper';
            let digit = assignDigit(playerHand);
            playRound(rpp, digit, playerHand, computerHand(num),cpuScore,playerScore);
        
        });
        const btn2 = document.querySelector('#btn-s');
        btn2.addEventListener('click', () => {
            var num = getComputerChoice();
            playerHand = 'Scissor';
            let digit = assignDigit(playerHand);
            playRound(rpp, digit, playerHand, computerHand(num),cpuScore,playerScore);
        
        });
    }    
// }
// play();