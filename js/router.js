import { home } from "./views/home.js"
import { mainContainer } from "./main.js"
import { multiplayers } from "./views/multiplayers.js"

export const router = (page)=>{

    mainContainer.innerHTML = ""
    switch(page){
        case "#home":
            mainContainer.appendChild(home())
            break;
        case "#multiplayer":
            multiplayers()
            break;
        case "#cpu":
            console.log(page)
            break;
        default:
            console.log("Not Found")
            break
    }
}