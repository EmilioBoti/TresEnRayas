import { home } from "./views/home.js"
import { router } from "./router.js"

export const mainContainer = document.getElementById("main-container")
mainContainer.appendChild(home())

window.addEventListener("hashchange", ()=>{
    let location = window.location.hash
    router(location)
})

export{ }
