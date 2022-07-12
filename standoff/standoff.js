//Stand off gamme WHITEBOARD


// Create a an html page with 3 buttons (rock, paper, scissors) 

// Create a bot that every time a button is clicked it will randomly select a value for itself. 

// Compare both values and write all the logic for who would win in each case. 

// After you’ve got the bot working, make the bot an actual player and don’t compare any of the values until both people have made a selection. You will need two sets of buttons, one for each player. You could have a player1 and player2 variable each set to false, when either clicks a button it will run a function that changes the value to true. After and only when both are true will it check for a winner. 

// Doing the bot first will help build a foundation for the game then you can implement a second human player. This was actually a huge help for me early on when I was learning so I would encourage you to make this asap and maybe try a few other games: 
// Higher or lower:
// The bot chooses a random number between 1-100(or whatever you choose) then the player has an input field that they can type a number to try and guess what the bot chose. If they are lower than the number it will display lower and so on until you guess correctly. 

// Tic tac toe: more advanced but will help you keep track of a TON of variables and a ton of game logic. 



//--------------  

//When a button is clicked a bot will randomly choose rock paper or scissors
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

const myLivesH2 = document.getElementById("myLives")
const botsLivesH2 = document.getElementById("botsLives")

const botsChoices = ['rock', 'paper', 'scissors']
let myLives = 3;
let botsLives = 3;



// on rock button click
const rock = () => {

    let randomIndex = Math.floor(Math.random() * botsChoices.length);
    let botsPick = botsChoices[randomIndex];

    if (botsPick === 'paper'){
        alert("Bot won!")
        myLives--
    } else if (botsPick === 'scissors'){
        alert("You won!")
        botsLives--
    } else if (botsPick === 'rock'){
        alert("Tie, try again!")
    }

    document.getElementById("myLives").innerHTML = myLives
    document.getElementById("botsLives").innerHTML = botsLives
}

// on paper button click
const paper = () => {

    let randomIndex = Math.floor(Math.random() * botsChoices.length);
    let botsPick = botsChoices[randomIndex];

    if (botsPick === 'scissors'){
        alert("Bot won!")
        myLives--
    } else if (botsPick === 'rock'){
        alert("You won!")
        botsLives--
    } else if (botsPick === 'paper'){
        alert("Tie, try again!")
    }

    document.getElementById("myLives").innerHTML = myLives
    document.getElementById("botsLives").innerHTML = botsLives

}


// on scissors button click
const scissors = () => {

    let randomIndex = Math.floor(Math.random() * botsChoices.length);
    let botsPick = botsChoices[randomIndex];

    if (botsPick === 'rock'){
        alert("Bot won!")
        myLives--
    } else if (botsPick === 'paper'){
        alert("You won!")
        botsLives--
    } else if (botsPick === 'scissors'){
        alert("Tie, try again!")
    }

    document.getElementById("myLives").innerHTML = myLives
    document.getElementById("botsLives").innerHTML = botsLives
}

rockBtn.addEventListener('click', rock)
paperBtn.addEventListener('click', paper)
scissorsBtn.addEventListener('click', scissors)



//compare the bots value to the calue I chose and alert the winner

