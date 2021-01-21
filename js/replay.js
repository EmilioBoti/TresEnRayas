import { matrixPlay } from "./play.js"
import { container } from "./main.js"

let position = 0

function replay(){

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
export{ replay }
