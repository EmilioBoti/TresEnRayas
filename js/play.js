import { theWinner } from "./checkWinner.js"

let turn = "X"
let matrixPlay = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
  //fuction to change players
  function alreadyPlay(){
    if(turn !== "X") turn = "X" 
      else  turn = "O"
}

 const toPlay = (e)=>{

  const boxTarget = e.target 

  if(boxTarget.id === "box1" || boxTarget.id === "box2" || boxTarget.id === "box3" || boxTarget.id === "box4" || 
    boxTarget.id === "box5" || boxTarget.id === "box6" || boxTarget.id === "box7" || boxTarget.id === "box8" || 
    boxTarget.id === "box9"){
    
    let x = boxTarget.dataset.position.split("")

    if(matrixPlay[x[0]][x[1]] === 1 || matrixPlay[x[0]][x[1]] === 2 || matrixPlay[x[0]][x[1]] === 3 || matrixPlay[x[0]][x[1]] === 4 ||
      matrixPlay[x[0]][x[1]] === 5 || matrixPlay[x[0]][x[1]] === 6 || matrixPlay[x[0]][x[1]] === 7 ||
      matrixPlay[x[0]][x[1]] === 8 || matrixPlay[x[0]][x[1]] === 9){

      e.target.innerHTML = turn
      matrixPlay[x[0]][x[1]] = turn
      alreadyPlay()
    }
  }
  theWinner()
}

export { toPlay, matrixPlay }