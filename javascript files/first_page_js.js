let popup = document.getElementById('popupID')
let content = document.getElementById('contentID')
let twoPlayerOption = document.getElementById('twoPlayersOptionID')


function blurr(){
    content.classList.toggle("active");
}



function showPlayerOptions(){
    popup.classList.toggle("active")
}

function twoPlayers(){
    twoPlayerOption.classList.toggle("active")
    
}
