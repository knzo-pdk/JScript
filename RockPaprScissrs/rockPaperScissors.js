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

    
    function assignDigit(assign){ //assign incremental integer to array counter
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

    //counts no# of time 'i' has to increment. Win or lose is then decided on 'i'
    function playRound(array, digit, playerHand, cpuHand){
        if(playerScore !== 5 && cpuScore !== 5) {
            let scoreArr = [];
            let verdict = "";
            const container = document.querySelector('#result');
            const content = document.createElement('div');
            container.appendChild(content);
            

            let i = 0;
            while(cpuHand !== array[i]) {
                i++;
                digit++;
            }

            if (digit == 2 || digit == -1) {
                verdict = "[You lose! " + array[i] + " beats " + playerHand + ']';
                cpuScore++;
            } else if (digit == 1) {
                verdict = "[You win! " + playerHand + " beats " + array[i] + ']';
                playerScore++;
            } else { // 4 is tie. 3 is tie. 
                verdict = "[It's a tie " + playerHand + " is tied with " + array[i] + ']';
            }
            container.textContent = verdict + "\n" + "Cpu score: " + cpuScore + " Player score: " + playerScore;
            scoreArr.forEach(announce);       
        
            if(cpuScore == 5 && cpuScore > playerScore) {
                container.textContent = verdict + "Computer won!"
            } else if (playerScore == 5 && cpuScore < playerScore) {
                container.textContent = verdict + "You won!"
            }
        }
        return;
    }

    function announce(item){
        console.log(item);
    }
    
    const btn = document.querySelector('#btn-r'); //reference to button
    btn.addEventListener('click', () => {  //when clicked on, do...
        //if(playerScore !== 5 && cpuScore !== 5) {
            var num = getComputerChoice();
            playerHand = 'Rock';
            let digit = assignDigit(playerHand); //assign a specific digit to the playerHand
            let scoreArr = playRound(rpp, digit, playerHand, computerHand(num));
        //}    
    });
    const btn1 = document.querySelector('#btn-p');
    btn1.addEventListener('click', () => {  
        //if(playerScore !== 5 && cpuScore !== 5) {
            var num = getComputerChoice();
            playerHand = 'Paper';
            let digit = assignDigit(playerHand);
            let scoreArr = playRound(rpp, digit, playerHand, computerHand(num));
            //scoreArr.forEach(announce)
        //}
    });
    const btn2 = document.querySelector('#btn-s');
    btn2.addEventListener('click', () => {
        //if(playerScore !== 5 && cpuScore !== 5) {
            var num = getComputerChoice();
            playerHand = 'Scissor';
            let digit = assignDigit(playerHand);
            let scoreArr = playRound(rpp, digit, playerHand, computerHand(num));
            //scoreArr.forEach(announce)
        //}
    });
// }
// play();