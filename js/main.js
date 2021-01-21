import { toPlay } from "./play.js"
import { replay } from "./replay.js"
import { win } from "./checkWinner.js"

const container = document.getElementById("container")
container.addEventListener("click", (e)=>{ if(win === false) toPlay(e) })

//reload the page
const reload = document.getElementById("reload")
reload.addEventListener("click", ()=>{ location.reload()})

//to play again
const btn = document.getElementById("reset")
btn.addEventListener("click", ()=>{ replay() })

export{ container}