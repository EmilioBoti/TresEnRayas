import { toPlay } from "../play.js"
import { win, replay } from "../checkWinner.js"
import { mainContainer } from "../main.js"

export function multiplayers(){

    const page = `
        <section class="grid-score">
            <div class="card" id="card"></div> 
            <div class="goBack" id ="goBack">
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M9.00069 0.703754C9.00088 0.557116 8.93586 0.414107 8.81473 0.294739C8.6936 0.17537 8.52242 0.0856173 8.32515 0.0380394C8.12789 -0.00953858 7.9144 -0.0125603 7.71456 0.029397C7.51473 0.0713542 7.33856 0.156191 7.21069 0.272035L0.210694 6.60016C0.0741394 6.72359 0 6.8755 0 7.03188C0 7.18826 0.0741394 7.34017 0.210694 7.4636L7.21069 13.7917C7.33856 13.9076 7.51473 13.9924 7.71456 14.0344C7.9144 14.0763 8.12789 14.0733 8.32515 14.0257C8.52242 13.9781 8.6936 13.8884 8.81473 13.769C8.93586 13.6497 9.00088 13.5066 9.00069 13.36V10.5545C14.3797 10.6333 16.9637 11.3512 18.2617 12.1316C19.4957 12.8734 19.7217 13.746 19.9567 14.6601L20.0177 14.8956C20.0626 15.0642 20.1935 15.2154 20.3858 15.3208C20.5782 15.4262 20.8187 15.4786 21.0621 15.468C21.3055 15.4575 21.535 15.3848 21.7075 15.2636C21.88 15.1424 21.9836 14.981 21.9987 14.8099C22.1697 12.8777 21.9127 10.0778 19.9717 7.73571C18.0877 5.4625 14.6947 3.71454 9.00069 3.53172V0.703754Z" fill="black"/>
                    </g>
                </svg>                        
            </div>
            <div class="title pos">
                Tic-Tac-Toe
            </div>
            <div class="board-score">
            <div class="board-score-item">
                <p class="players">Player #1</p> 
                <div id="player1" class="score btn"><p>0</p></div>
            </div>    
            <div class="board-score-item">
                <p class="players">Player #2</p>
                <div id="player2"  class="score btn"><p>0</p></div>
            </div>
            </div>
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
            <input type="button" class="btn" value="Play Again" id="replay">
            <input type="button" class="btn" value="Reset" id="reset">
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

    const goBack = document.getElementById("goBack")
    goBack.addEventListener("click", ()=>{ window.location.hash = "home"})
}