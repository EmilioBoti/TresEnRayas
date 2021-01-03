import { matrixPlay } from "./play.js"

let player1 = 0
let player2 = 0

export function theWinner(){

  let boardPlayer1 = document.getElementById("player1")
  let boardPlayer2 = document.getElementById("player2")

 if((matrixPlay[0][0] === matrixPlay[0][1]) && (matrixPlay[0][0] === matrixPlay[0][2])){
   if(matrixPlay[0][0] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
 //Done line 1
 if( (matrixPlay[0][0] === matrixPlay[1][1]) && (matrixPlay[0][0] === matrixPlay[2][2])){
   if(matrixPlay[0][0] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
 //Done diagonal 1--> \
 if( (matrixPlay[1][0] === matrixPlay[1][1]) && (matrixPlay[1][1] === matrixPlay[1][2])){
   if(matrixPlay[1][0] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
 //Done line 2
 if( (matrixPlay[2][0] === matrixPlay[2][1]) && (matrixPlay[2][1] === matrixPlay[2][2])){
   if(matrixPlay[2][0] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
 //Done line 3
 if((matrixPlay[0][0] === matrixPlay[1][0]) && (matrixPlay[0][0] === matrixPlay[2][0])){
   if(matrixPlay[0][0] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
 //Done colunm 1
 if( (matrixPlay[2][0] === matrixPlay[1][1]) && (matrixPlay[2][0] === matrixPlay[0][2])){
   if(matrixPlay[2][0] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
 //Done diagonal 2--> /
 if( (matrixPlay[0][2] === matrixPlay[1][2]) && (matrixPlay[0][2] === matrixPlay[2][2])){
   if(matrixPlay[0][2] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 } 
 //Done colunm 2
 if( (matrixPlay[0][1] === matrixPlay[1][1]) && (matrixPlay[0][1] === matrixPlay[2][1])){
   if(matrixPlay[0][1] === "X"){
     player1++
     alert("player 1, you are the WINNER!!")
     boardPlayer1.innerHTML = player1
   }else{
     player2++
     alert("player 2, you are the WINNER!!")
     boardPlayer2.innerHTML = player2
   }
 }
}