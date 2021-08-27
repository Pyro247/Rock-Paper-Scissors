// All variable Declarations -- Getting HTML elements

// HTML element --> Images
let rockChoice = document.getElementById('rock-id')
let paperChoice = document.getElementById('paper-id')
let scissorChoice = document.getElementById('scissors-id')

// HTML element --> Player's Choices
let player1ChoiceSpan = document.getElementById('p1-choice')
let player2ChoiceSpan = document.getElementById('p2-choice')
let operationSpan = document.getElementById('choice-operator')

// HTML element --> Player's Score
let player1Score = document.getElementById('player-1-score-el') 
let player2Score = document.getElementById('player-2-score-el')

// HTML element --> Images' parent
let imagesID = document.getElementById('imagesID')

// HTML element --> Images
let scoreStatus = document.getElementById('score-status')

// HTML element --> Main button (Check and New Game)
let buttonx = document.getElementById('buttonid')

// HTML element --> Getting Player's Name
let player1NameAboveChoice = document.getElementById('player1nameAboveChoice')
let player2NameAboveChoice = document.getElementById('player2nameAboveChoice')

// Setting Player's Choice to default
let player1Choice = ""
let player2Choice = ""

// Setting Player's Score to 0
let player1Scorex = 0 
let player2Scorex = 0

// Setting Choices
let rockx = 1
let paperx = 2
let scissorx = 3

// Setting Player's name to none
let player1Name = ""
let player2Name = ""

// Function for disabling image after check button is triggered
function disableImage(){
    imagesID.classList.toggle('active')
}

// Function for getting player's name
function getPlayersname(){
     player1Name = document.getElementById('player1inputID').value 
    player1Score.textContent = player1Name + " :"
    player1NameAboveChoice.textContent = player1Name
     player2Name = document.getElementById('player2inputID').value
     player2Score.textContent = player2Name + " :"
     player2NameAboveChoice.textContent = player2Name
     status()
}

//Function setting the Status (Player's turn)
function status(){
    if (player1Choice === ""){
        scoreStatus.textContent = player1Name + "'s Turn"
    } else{
        scoreStatus.textContent = player2Name + "'s Turn"
    }
}

// Function: setting Player's choice to rock
function rock(){
    if (player1Choice === ""){
        player1Choice = rockx
        player1ChoiceSpan.textContent = "Done"
        status()
    }else{
        player2Choice = rockx
        player2ChoiceSpan.textContent = "Done"
        scoreStatus.textContent = "Ready"
    }
}

// Function: setting Player's choice to paper
function paper(){
    if (player1Choice === ""){
        player1Choice = paperx
        player1ChoiceSpan.textContent = "Done"
        status()
    }else{
        player2Choice = paperx
        player2ChoiceSpan.textContent = "Done"
        scoreStatus.textContent = "Ready"
    }
}

// Function: setting Player's choice to scissors
function scissors(){
    if (player1Choice === ""){
        player1Choice = scissorx
        player1ChoiceSpan.textContent = "Done"
        status()
    }else{
        player2Choice = scissorx
        player2ChoiceSpan.textContent = "Done"
        scoreStatus.textContent = "Ready"
    } 
}

// Function for the Main button (Check & NewGame)
function mainButton(){
    if (buttonx.textContent === "Check"){
        check()
    }else{
        newGame()
    }
}

//Function: Determining the winner : Validating Player's choices
function check(){
    //DRAW
    if ((player1Choice === rockx & player2Choice === rockx) || (player1Choice === paperx & player2Choice === paperx) || (player1Choice === scissorx & player2Choice === scissorx)) {
            scoreStatus.textContent = "Draw!"
            buttonx.textContent = "New Game" 
            disableImage()  
    }

    //Rock vs Paper
    if (player1Choice === rockx & player2Choice === paperx){
            player1ChoiceSpan.textContent = "Rock"
            player2ChoiceSpan.textContent = "Paper"
            scoreStatus.textContent = player2Name + " Wins!"
            operationSpan.textContent = ">"
            player2Scorex += 1
            player2Score.textContent = player2Name + " : " + player2Scorex
            buttonx.textContent = "New Game"
            disableImage()
            return
    }

       //Paper vs Rock 
        else if(player1Choice === paperx & player2Choice === rockx){
            player1ChoiceSpan.textContent = "Paper"
            player2ChoiceSpan.textContent = "Rock"
            scoreStatus.textContent = player1Name + " Wins!"
            operationSpan.textContent = "<"
            player1Scorex += 1
            player1Score.textContent = player1Name + " : " + player1Scorex
            buttonx.textContent = "New Game"
            disableImage()
            return
    }

    //Rock vs Scissors
    if (player1Choice === rockx & player2Choice === scissorx){
            player1ChoiceSpan.textContent = "Rock"
            player2ChoiceSpan.textContent = "Scissors"
            scoreStatus.textContent = player1Name + " Wins!"
            operationSpan.textContent = "<"
            player1Scorex += 1
            player1Score.textContent = player1Name + " : " + player1Scorex
            buttonx.textContent = "New Game"
            disableImage()
            return
    }
        //Scissors vs Rock
        else if(player1Choice === scissorx & player2Choice === rockx){
            player1ChoiceSpan.textContent = "Scissors"
            player2ChoiceSpan.textContent = "Rock"
            scoreStatus.textContent = player2Name + " Wins!"
            operationSpan.textContent = ">"
            player2Scorex += 1
            player2Score.textContent = player2Name + " : " + player2Scorex
            buttonx.textContent = "New Game"
            disableImage()
            return
    }

    //Paper vs Scissor
    if (player1Choice === paperx & player2Choice === scissorx){
            player1ChoiceSpan.textContent = "Paper"
            player2ChoiceSpan.textContent = "Scissors"
            scoreStatus.textContent = player2Name + " Wins!"
            operationSpan.textContent = ">"
            player2Scorex += 1
            player2Score.textContent = player2Name + " : " + player2Scorex
            buttonx.textContent = "New Game"
            disableImage()
            return
    }
        //Scissors vs Paper
        else if(player1Choice === scissorx & player2Choice === paperx){
            player1ChoiceSpan.textContent = "Scissors"
            player2ChoiceSpan.textContent = "Paper"
            scoreStatus.textContent = player1Name + " Wins!"
            operationSpan.textContent = "<"
            player1Scorex += 1
            player1Score.textContent = player1Name + " : " + player1Scorex
            buttonx.textContent = "New Game"
            disableImage()
            return
    }
    
}

// Function for New Game
function newGame(){
    player1Choice = ""
    player2Choice = ""
    player1ChoiceSpan.textContent = ""
    player2ChoiceSpan.textContent = ""
    operationSpan.textContent = "="
    buttonx.textContent = "Check"
    status()
    disableImage()
}