export const home = ()=>{

    window.location.hash = "/home"
    
    const homeP = document.createElement("section")
    homeP.classList.add("home-page")

    //home child box-title
    const boxTitle = document.createElement("div")
    boxTitle.classList.add("box-title")
    homeP.appendChild(boxTitle)
    //box title child
    const title = document.createElement("h1")
    title.textContent = "Let's Play Tic-Tac-Toe"
    title.classList.add("title")
    boxTitle.appendChild(title)
    
    //box title child
    const subtitle = document.createElement("p")
    subtitle.innerText = "Play with your Friends and Family"
    subtitle.classList.add("subtitle")
    boxTitle.appendChild(subtitle)

    //child box-btn
    const boxBtn = document.createElement("div")
    boxBtn.classList.add("box-btn")
    homeP.appendChild(boxBtn)

    const btn1 = document.createElement("input")
    btn1.type = "button"
    btn1.value = "Multiplayers"
    btn1.id = "btn1"
    btn1.classList.add("btn")
    boxBtn.appendChild(btn1)

    btn1.addEventListener("click", ()=>{
        console.log("Fist Button Clicked")
        window.location.hash = "/multiplayer"
    })

    const btn2 = document.createElement("input")
    btn2.type = "button"
    btn2.value = "Against Machine"
    btn2.id = "btn1"
    btn2.classList.add("btn")
    boxBtn.appendChild(btn2)

    btn2.addEventListener("click", ()=>{
        console.log("Second Button Clicked")
        alert("Comming Soon!")
    })

    return homeP
}