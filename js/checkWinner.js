import { matrixPlay } from "./play.js"

let player1 = 0
let player2 = 0
let win = false
let position = 0

function alertPlayer(player){

  if(player === "X"){
    alert("player 1, you are the WINNER!!")
  }else{
    if(player === "O") alert("player 2, you are the WINNER!!")
  }
}

//function to replay again
function replay(){
  win  = false
  const boxes = container.childNodes
  boxes.forEach( elem => elem.innerHTML = "" )

  for(let f = 0; f < matrixPlay.length; f++){
    for(let c = 0; c < matrixPlay.length; c++){
      position++
      matrixPlay[f][c] = position
    }
  }
  position = 0
}


//function to check who wins
function theWinner(){

  let boardPlayer1 = document.getElementById("player1")
  let boardPlayer2 = document.getElementById("player2")
  let sayWinner = ""

  //line 1
  
  if((matrixPlay[0][0] === matrixPlay[0][1]) && (matrixPlay[0][0] === matrixPlay[0][2])){
    win = true
    if(matrixPlay[0][0] === "X"){
     player1++
     sayWinner = matrixPlay[0][0]
     boardPlayer1.innerHTML = player1
    }else{
     player2++
     sayWinner = matrixPlay[0][0]
     boardPlayer2.innerHTML = player2
    }
  }
 //line middle
  if( (matrixPlay[1][0] === matrixPlay[1][1]) && (matrixPlay[1][1] === matrixPlay[1][2])){
    win = true
    if(matrixPlay[1][0] === "X"){
     player1++
     sayWinner = matrixPlay[1][0]
     boardPlayer1.innerHTML = player1
    }else{
     player2++
     sayWinner = matrixPlay[1][0]
     boardPlayer2.innerHTML = player2
    }
  }
 // line 3
  if( (matrixPlay[2][0] === matrixPlay[2][1]) && (matrixPlay[2][1] === matrixPlay[2][2])){
    win = true
    if(matrixPlay[2][0] === "X"){
     player1++
     sayWinner = matrixPlay[2][0]
     boardPlayer1.innerHTML = player1
    }else{
     player2++
     sayWinner = matrixPlay[2][0]
     boardPlayer2.innerHTML = player2
    }
  }
 //column 1
  if((matrixPlay[0][0] === matrixPlay[1][0]) && (matrixPlay[0][0] === matrixPlay[2][0])){
    win = true
    if(matrixPlay[0][0] === "X"){
     player1++
     sayWinner = matrixPlay[0][0]
     boardPlayer1.innerHTML = player1
    }else{
     player2++
     sayWinner = matrixPlay[0][0]
     boardPlayer2.innerHTML = player2
    }
  }
//Column middle
  if( (matrixPlay[0][1] === matrixPlay[1][1]) && (matrixPlay[0][1] === matrixPlay[2][1])){
    win = true
    if(matrixPlay[0][1] === "X"){
    player1++
    sayWinner = matrixPlay[0][1]
    boardPlayer1.innerHTML = player1
    }else{
    player2++
    sayWinner = matrixPlay[0][1]
    boardPlayer2.innerHTML = player2
    }
  }
   //Column 3
  if( (matrixPlay[0][2] === matrixPlay[1][2]) && (matrixPlay[0][2] === matrixPlay[2][2])){
    win = true
    if(matrixPlay[0][2] === "X"){
     player1++
     sayWinner = matrixPlay[0][2]
     boardPlayer1.innerHTML = player1
    }else{
     player2++
     sayWinner = matrixPlay[0][2]
     boardPlayer2.innerHTML = player2
     }
  }

//diagonal \
  if( (matrixPlay[0][0] === matrixPlay[1][1]) && (matrixPlay[0][0] === matrixPlay[2][2])){
    win = true
    if(matrixPlay[0][0] === "X"){
    player1++
    sayWinner = matrixPlay[0][0]
    boardPlayer1.innerHTML = player1
    }else{
    player2++
    sayWinner = matrixPlay[0][0]
    boardPlayer2.innerHTML = player2
    }
  }
 //Diagonal /
  if( (matrixPlay[2][0] === matrixPlay[1][1]) && (matrixPlay[2][0] === matrixPlay[0][2])){
    win = true
    if(matrixPlay[2][0] === "X"){
     player1++
     sayWinner = matrixPlay[2][0]
     boardPlayer1.innerHTML = player1
    }else{
     player2++
     sayWinner = matrixPlay[2][0]
     boardPlayer2.innerHTML = player2
    }
  } 
  alertPlayer(sayWinner)
}
export{ theWinner, win, replay }