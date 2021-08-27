

let playerInput = document.getElementById('player1inputID')
let playerNameinHTML = document.getElementById('player1nameAboveChoice')

let playerNameinComputer = ""

let computerChoicerandomNum = 0
let computerChoice = 0
let computerChoiceHTML = document.getElementById('p2-choice')

let player1Choice = ""

let player1ChoiceHTML = document.getElementById('p1-choice')

let rockx = 1
let paperx = 2
let scissorsx = 3

let player1ScoreHTML = document.getElementById('player-1-score-el')
let playerComputerHTML = document.getElementById('player-2-score-el')

let userScore = 0
let computerScore = 0

let gameStatus = document.getElementById('score-status')

let disableImageHTML = document.getElementById('imagesID')

let NgCbtn = document.getElementById('buttonid')

function disableImage(){
    disableImageHTML.classList.toggle('active')
}

function rock(){
    if (player1Choice === ""){
        player1Choice = rockx
        player1ChoiceHTML.textContent = "Rock"
        computerChoiceFunction()
        gameStatus.textContent = "Ready"
        disableImage()
        check()
        newGameshowButton()
    }
}

function paper(){
    if (player1Choice === ""){
        player1Choice = paperx
        player1ChoiceHTML.textContent = "Paper"
        computerChoiceFunction()
        gameStatus.textContent = "Ready"
        disableImage()
        check()
        newGameshowButton()
    }
}

function scissorFunction(){
    if (player1Choice === ""){
        player1Choice = scissorsx
        player1ChoiceHTML.textContent = "Scissors"
        computerChoiceFunction()
        gameStatus.textContent = "Ready"
        disableImage()
        check()
        newGameshowButton()
       
    }
}

function generateComputerChoice(){
    computerChoicerandomNum = Math.floor(Math.random() * 3) + 1
}

function computerChoiceFunction(){
    generateComputerChoice()
    if (computerChoicerandomNum === 1){
        computerChoice = rockx
        computerChoiceHTML.textContent = "Rock"
    }else if(computerChoicerandomNum === 2){
        computerChoice = paperx
        computerChoiceHTML.textContent = "Paper"
    }else{
        computerChoice = scissorsx
        computerChoiceHTML.textContent = "Scissors"
    }
}


function getPlayernameComputer(){
    playerInput = document.getElementById('player1inputID').value
    if (playerInput === ""){
        playerNameinComputer = "User"
        playerNameinHTML.textContent = playerNameinComputer
        player1ScoreHTML.textContent = "User: "
    }else{
        playerNameinComputer = playerInput
        playerNameinHTML.textContent = playerNameinComputer
        player1ScoreHTML.textContent = playerNameinComputer + ": "
    }
    gameStatus.textContent = playerNameinComputer + "'s Turn"
}

function newGameshowButton(){
    NgCbtn.classList.toggle('active')
}

function newGame(){
    player1Choice = ""
    computerChoice = 0
    player1ChoiceHTML.textContent = ""
    computerChoiceHTML.textContent = ""
    gameStatus.textContent = playerNameinComputer + "'s Turn"
    newGameshowButton()
    disableImage()
}



function check(){
    //DRAW
    if ((player1Choice === rockx & computerChoice === rockx) || (player1Choice === paperx & computerChoice === paperx) || (player1Choice === scissorsx & computerChoice === scissorsx)) {
        gameStatus.textContent = "Draw!"

    }

    //Rock vs Paper
    if (player1Choice === rockx & computerChoice === paperx){
        gameStatus.textContent = "Computer Wins!"
        computerScore += 1
        playerComputerHTML.textContent = "Computer: " + computerScore
        
    }

    //Rock vs Scissors
    if (player1Choice === rockx & computerChoice === scissorsx){
        gameStatus.textContent = playerNameinComputer + " Wins!"
        userScore += 1
        player1ScoreHTML.textContent = playerNameinComputer + ": " + userScore
        
    }

    //Paper vs Rock
    if (player1Choice === paperx & computerChoice === rockx){
        gameStatus.textContent = playerNameinComputer + " Wins!"
        userScore += 1
        player1ScoreHTML.textContent = playerNameinComputer + ": " + userScore
    }

    //Paper vs Scissors
    if (player1Choice === paperx & computerChoice === scissorsx){
        gameStatus.textContent = "Computer Wins!"
        computerScore += 1
        playerComputerHTML.textContent = "Computer" + ": " + computerScore
        
    }

    //Scissors vs Rock
    if (player1Choice === scissorsx & computerChoice === rockx){
        gameStatus.textContent = "Computer Wins!"
        computerScore += 1
        playerComputerHTML.textContent = "Computer" + ": " + computerScore
        
        
    }
    //Scissors vs Paper
    if (player1Choice === scissorsx & computerChoice === paperx){
        gameStatus.textContent = playerNameinComputer + " Wins!"
        userScore += 1
        player1ScoreHTML.textContent = playerNameinComputer + ": " + userScore
        
    }
    NgCbtn.textContent = "New Game"
    
}



