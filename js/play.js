import { theWinner } from "./checkWinner.js"

const matrixPlay = [[1,2,3],[4,5,6],[7,8,9]]
let turn = "X"
  //fuction to change players' turn
function alreadyPlay(boxTarget){

  if(turn !== "X") {
    turn = "X"
    boxTarget.style.color = "#1C2833"
  }else{
    turn = "O"
    boxTarget.style.color = "#707B7C"
  } 
}
//Play function
 function toPlay(e){
  const boxTarget = e.target

  if(boxTarget.id === "box1" || boxTarget.id === "box2" || boxTarget.id === "box3" || boxTarget.id === "box4" || 
    boxTarget.id === "box5" || boxTarget.id === "box6" || boxTarget.id === "box7" || boxTarget.id === "box8" || 
    boxTarget.id === "box9"){
    
    const x = boxTarget.dataset.position.split("").map((elem)=> Number.parseInt(elem)) //get position of box's clicked
  
    if(matrixPlay[x[0]][x[1]] === 1 || matrixPlay[x[0]][x[1]] === 2 || matrixPlay[x[0]][x[1]] === 3 || matrixPlay[x[0]][x[1]] === 4 ||
      matrixPlay[x[0]][x[1]] === 5 || matrixPlay[x[0]][x[1]] === 6 || matrixPlay[x[0]][x[1]] === 7 ||
      matrixPlay[x[0]][x[1]] === 8 || matrixPlay[x[0]][x[1]] === 9){

      boxTarget.innerHTML = turn
      matrixPlay[x[0]][x[1]] = turn
      alreadyPlay(boxTarget)
    }
  }
  theWinner()
}
export { toPlay, matrixPlay }