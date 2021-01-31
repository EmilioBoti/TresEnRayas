import { matrixPlay } from "./play.js"

let player1 = 0
let player2 = 0
let position = 0
let win = false

function alertPlayer(turn){

  const card = document.getElementById("card")
  card.classList.add("card--show")

  let player

  if(turn === "X"){
    player = turn
  }else{
    if(turn === "O"){
      player = turn
    } 
  }
  const showCard = `
    <div class="popUpWin">
      <p>${player}, you are the WINNER</p>
    </div>
  `
  card.innerHTML = showCard
  setTimeout(()=>card.classList.remove("card--show"), 2000)

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

  const boardPlayer1 = document.getElementById("player1")
  const boardPlayer2 = document.getElementById("player2")
  let sayWinner = ""
  const size = matrixPlay.length

  //Check lines
  for(let f = 0; f < size; f++){
    if((matrixPlay[f][0] === matrixPlay[f][1]) && (matrixPlay[f][1] === matrixPlay[f][2])){
      win = true
      if(matrixPlay[f][0] === "X"){
          player1++
          sayWinner = matrixPlay[f][0]
          boardPlayer1.innerHTML = player1
          setTimeout(()=>{alertPlayer(sayWinner)}, 1000)

      }else{
        if(matrixPlay[f][0] === "O"){
          player2++
          sayWinner = matrixPlay[f][0]
          boardPlayer2.innerHTML = player2
          setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
        }
      }
      return
    }
  }
  //check columns
  for(let f = 0; f < size; f++){
    if((matrixPlay[0][f] === matrixPlay[1][f]) && (matrixPlay[0][f] === matrixPlay[2][f])){
      win = true
      if(matrixPlay[0][f] === "X"){
          player1++
          sayWinner = matrixPlay[0][f]
          boardPlayer1.innerHTML = player1
          setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
      }else{
        if(matrixPlay[0][f] === "O"){
          player2++
          sayWinner = matrixPlay[0][f]
          boardPlayer2.innerHTML = player2
          //setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
        }
      }
      return
    }
  }
//Diagonal \
  if( (matrixPlay[0][0] === matrixPlay[1][1]) && (matrixPlay[0][0] === matrixPlay[2][2])){
    win = true
    if(matrixPlay[0][0] === "X"){
      player1++
      sayWinner = matrixPlay[0][0]
      boardPlayer1.innerHTML = player1
      setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
    }else{
      player2++
      sayWinner = matrixPlay[0][0]
      boardPlayer2.innerHTML = player2
      //setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
    }
  }
 //Diagonal /
  if( (matrixPlay[2][0] === matrixPlay[1][1]) && (matrixPlay[2][0] === matrixPlay[0][2])){
    win = true
    if(matrixPlay[2][0] === "X"){
      player1++
      sayWinner = matrixPlay[2][0]
      boardPlayer1.innerHTML = player1
      setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
    }else{
      player2++
      sayWinner = matrixPlay[2][0]
      boardPlayer2.innerHTML = player2
      setTimeout(()=>{alertPlayer(sayWinner)}, 1000)
    }
  } 
}
export{ theWinner, win, replay }