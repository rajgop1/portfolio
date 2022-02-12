let aboutemedesc = document.getElementById("aboutmedesc")
let aboutmetext = aboutemedesc.textContent
aboutemedesc.textContent = ""
let index = 0
let welcometext = document.querySelector(".welcome")
let welcomeanimation = [...welcometext.getAnimations()]
let aboutmetitle = document.getElementById("aboutmetitle")
let homebuttonmore = document.getElementById("homebuttonmore")
console.log(aboutmetitle)
let pointingarrow=document.getElementById("pointingarrow")
console.log(pointingarrow)
let hello

welcometext.addEventListener("animationend",()=>{
    txt()
    
    
})
aboutmetitle.addEventListener("animationstart",()=>{
    
    pointingarrow.classList.remove("pointingarrowh")
    clearInterval(hello)
    aboutemedesc.textContent=""
    index=0
    // homebuttonmore.classList.remove("homebuttonanimate")
})
function txt()
{
    hello = setInterval(() => {
        if (index < aboutmetext.length) {
            aboutemedesc.innerHTML += aboutmetext[index]
            
            index++
        }
        else {
            pointingarrow.classList.add("pointingarrowh")
            // homebuttonmore.classList.add("homebuttonanimate")

            clearInterval(hello)
        }
    }, 100)
        


}
    
