import { toPlay } from "../play.js"
import { win, replay } from "../checkWinner.js"
import { mainContainer } from "../main.js"

export function multiplayers(){

    const page = `
        <header class="grid-container">
            <h1 id="title">Tic Tac Toe</h1>
        </header>
        <div class="card" id="card"></div>
        <section class="grid-score">
            <h2>it is hiden</h2>
            <div class="score">1<sup>st</sup> Player<span id="player1">0</span></div>    
            <div class="score" id="vs">Vs</div>
            <div class="score"><span id="player2">0</span>2<sup>nd</sup> Player</div>
        </section>
        <section class="container" id="container">
            <div class="items" id="box1" data-position="00"></div>
            <div class="items" id="box2" data-position="01"></div>
            <div class="items" id="box3" data-position="02"></div>
            <div class="items" id="box4" data-position="10"></div>
            <div class="items" id="box5" data-position="11"></div>
            <div class="items" id="box6" data-position="12"></div>
            <div class="items" id="box7" data-position="20"></div>
            <div class="items" id="box8" data-position="21"></div>
            <div class="items" id="box9" data-position="22"></div>
        </section>
        <div class="grid-board">
            <input type="button" class="board-btn" value="Play Again" id="replay">
            <input type="button" class="board-btn" value="Reset" id="reset">
        </div>    
    `
    mainContainer.innerHTML = ""
    mainContainer.innerHTML = page

    const container = document.getElementById("container")
    container.addEventListener("click", (e)=>{ if(win === false) toPlay(e) })
    
    //reload the page
    const reload = document.getElementById("reset")
    reload.addEventListener("click", ()=>{ location.reload()})
    
    //to play again
    const btn = document.getElementById("replay")
    btn.addEventListener("click", ()=>{ replay() })
}