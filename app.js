let toggle=document.getElementById("toggle")
let but=document.getElementById("tog")
but.addEventListener("click",()=>{
    if (but.classList.contains("fa-moon")) {
        console.log(but.classList);
        but.classList.remove("fa-moon");
        but.classList.add("fa-sun");
        document.body.style.backgroundColor = "white"
        document.body.style.color="black"
        document.getElementById("exp").style.color="black"
        document.getElementById("tog").style.color = "black"
        document.getElementById("exp").style.border="1px solid black"
        let h=document.getElementsByClassName("h")
        for(let e of h){
            e.style.color = "black"
        }
        let a = document.getElementsByClassName("minion")
        for (let e of a) {
            e.style.backgroundColor= "white"
            e.style.color = "black"
        }
        let d = document.getElementsByClassName("tools")
        for (let e of d) {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        }
        let g = document.getElementsByTagName("button")
        for (let e of g) {
            e.style.color = "black"
        }
    } else {
        but.classList.remove("fa-sun");
        but.classList.add("fa-moon");
        
        document.body.style.backgroundColor = "#1f1f1f"
        document.body.style.color = "#959595"
        document.getElementById("exp").style.color = "white"
        document.getElementById("tog").style.color = "white"
        document.getElementById("exp").style.border = "1px solid hsla(0, 0%, 100%, 0.04)"
        let h = document.getElementsByClassName("h")
        for (let e of h) {
            e.style.color = "white"
        }
        let a = document.getElementsByClassName("minion")
        for (let e of a) {
            e.style.backgroundColor = "hsla(0, 0%, 100%, 0.04)"
            e.style.color = "white"
        }
        let d = document.getElementsByClassName("tools")
        for (let e of d) {
            e.style.backgroundColor = "#1f1f1f"
            e.style.color = "white"
        }
        let g = document.getElementsByTagName("button")
        for (let e of g) {
            e.style.color = "white"
        }
    }
})
   