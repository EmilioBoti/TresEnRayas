import { theWinner } from "./checkWinner.js"

let turn = "O"
let matrixPlay = [
  ["1","2","3"],
  ["4","5","6"],
  ["7","8","9"]
]

 const toPlay = (e)=>{

  if(turn !== "X"){
    turn = "X" 
  }else{
    turn = "O"
  } 
  if(e.target.id === "box1"){
    if(matrixPlay[0][0] === "1"){
      e.target.innerHTML = turn
      matrixPlay[0][0] = turn
    }
  }else{

    if(e.target.id === "box2"){
      if(matrixPlay[0][1] === "2"){
        e.target.innerHTML = turn
        matrixPlay[0][1] = turn
      }
    }
    if(e.target.id === "box3"){
      if(matrixPlay[0][2] ==="3"){
        e.target.innerHTML = turn
        matrixPlay[0][2] = turn
      }
    } 
    if(e.target.id === "box4"){
      if(matrixPlay[1][0] ==="4"){
        e.target.innerHTML = turn
        matrixPlay[1][0] = turn
      }
    }
    if(e.target.id === "box5"){
      if(matrixPlay[1][1] ==="5"){
        e.target.innerHTML = turn
        matrixPlay[1][1] = turn
      }
    }
    if(e.target.id === "box6"){
      if(matrixPlay[1][2] ==="6"){
        e.target.innerHTML = turn
        matrixPlay[1][2] = turn
      }
    }
    if(e.target.id === "box7"){
      if(matrixPlay[2][0] ==="7"){
        e.target.innerHTML = turn
        matrixPlay[2][0] = turn
      }
    }
    if(e.target.id === "box8"){
      if(matrixPlay[2][1] ==="8"){
        e.target.innerHTML = turn
        matrixPlay[2][1] = turn
      } 
    }
    if(e.target.id === "box9"){
      if(matrixPlay[2][2] ==="9"){
        e.target.innerHTML = turn
        matrixPlay[2][2] = turn
      }
    }
  }
  theWinner()
}

export { toPlay, matrixPlay }