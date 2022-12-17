
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)+1;
    return random;
    }

let num = getComputerChoice();
const rpp = ["Rock", "Scissor", "Paper"]

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

//assign incremental integer to array counter
function assignDigit(assign){
    let digit;
    if(assign === "rock"){
        digit = 0;
    } else if (assign === "paper"){
        digit = 1;
    } else if (assign === "scissor"){
        digit = -1;
    }
    return digit;
}

//iterate through an array and return if won or lost
function isWon(array, digit, playerHand, cpuHand){
    let i = 0;
    while(cpuHand !== array[i]) {
        i++;
        digit++;
    }

    if (digit == 2 || digit == -1) {
        console.log("You lose! " + array[i] + " beats " + playerHand);
    } else if (digit == 1) {
        console.log("You win! " + playerHand + " beats " + array[i]);
    } else { // 4 is tie. 3 is tie. 
        console.log("It's a tie " + playerHand + " is tied with " + array[i]);
    }
}

//prompt user to enter
var playerHand = prompt("Please enter your selection(Rock/Paper/Scissor) or \"no\" to quit: ");
playerHand = playerHand.toLowerCase();

//grabbing array iterator
let digit = assignDigit(playerHand);

isWon(rpp, digit, playerHand, cpuHand);



