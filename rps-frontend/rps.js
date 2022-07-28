const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

const shrekLivesH2 = document.getElementById("shrek-life-counter")
const farquadLivesH2 = document.getElementById("farquad-life-counter")

const farquadChoices = ['rock', 'paper', 'scissors']
let shrekLives = 3;
let farquadLives = 3;


// on rock button click
const rock = () => {

    let randomIndex = Math.floor(Math.random() * farquadChoices.length);
    let farqPick = farquadChoices[randomIndex];

    if (farqPick === 'paper'){
        shrekLives--
    } else if (farqPick === 'scissors'){
        farquadLives--
    } else if (farqPick === 'rock'){
        alert("Tie, try again!")
    }

    if (shrekLives === 0){
        document.getElementById("shrek-life-counter").innerHTML = shrekLives
        alert("Game Over You Lose!")
    } else if (farquadLives === 0){
        document.getElementById("farquad-life-counter").innerHTML = farquadLives
        alert("Game Over You Win!")
    } else {

    document.getElementById("shrek-life-counter").innerHTML = shrekLives
    document.getElementById("farquad-life-counter").innerHTML = farquadLives
    }

    
}

// on paper button click
const paper = () => {

    let randomIndex = Math.floor(Math.random() * farquadChoices.length);
    let farqPick = farquadChoices[randomIndex];

    if (farqPick === 'scissors'){
        shrekLives--
    } else if (farqPick === 'rock'){
        farquadLives--
    } else if (farqPick === 'paper'){
        alert("Tie, try again!")
    }

    if (shrekLives === 0){
        document.getElementById("shrek-life-counter").innerHTML = shrekLives
        alert("Game Over You Lose!")
    } else if (farquadLives === 0){
        document.getElementById("farquad-life-counter").innerHTML = farquadLives
        alert("Game Over You Win!")
    } else {

    document.getElementById("shrek-life-counter").innerHTML = shrekLives
    document.getElementById("farquad-life-counter").innerHTML = farquadLives
    }

    

}


// on scissors button click
const scissors = () => {

    let randomIndex = Math.floor(Math.random() * farquadChoices.length);
    let farqPick = farquadChoices[randomIndex];

    if (farqPick === 'rock'){
        shrekLives--
    } else if (farqPick === 'paper'){
        farquadLives--
    } else if (farqPick === 'scissors'){
        alert("Tie, try again!")
    }

    if (shrekLives === 0){
        document.getElementById("shrek-life-counter").innerHTML = shrekLives
        alert("Game Over You Lose!")
    } else if (farquadLives === 0){
        document.getElementById("farquad-life-counter").innerHTML = farquadLives
        alert("Game Over You Win!")
    } else {

    document.getElementById("shrek-life-counter").innerHTML = shrekLives
    document.getElementById("farquad-life-counter").innerHTML = farquadLives
    }
}



rockBtn.addEventListener('click', rock)
paperBtn.addEventListener('click', paper)
scissorsBtn.addEventListener('click', scissors)
