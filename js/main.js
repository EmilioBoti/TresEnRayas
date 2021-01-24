import { toPlay } from "./play.js"
import { win, replay } from "./checkWinner.js"

//function to play
const container = document.getElementById("container")
container.addEventListener("click", (e)=>{ if(win === false) toPlay(e) })

//reload the page
const reload = document.getElementById("reset")
reload.addEventListener("click", ()=>{ location.reload()})

//to play again
const btn = document.getElementById("replay")
btn.addEventListener("click", ()=>{ replay() })

export{ container, win}