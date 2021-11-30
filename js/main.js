import { toPlay } from "./play.js"
import { replay } from "./replay.js"

const container = document.getElementById("container")
container.addEventListener("click", (e)=>{ toPlay(e)})

//reload the page
const reload = document.getElementById("reload")
reload.addEventListener("click", ()=>{
  location.reload()
})

const btn = document.getElementById("reset")
btn.addEventListener("click", ()=>{ replay() })

export{ container }