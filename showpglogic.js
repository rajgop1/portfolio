let main =document.querySelector(".main")
let aboutme=document.querySelector(".aboutme")
let navitem=document.getElementsByClassName("navitem")
let contactme = document.querySelector(".contactme")
navitem=[...navitem]
navitem.forEach(nav=>{
   nav.addEventListener("click",(event)=>{
       console.log(event.target)
       if(event.target.classList.contains("covehome"))
       {
           main.classList.add("show")
           
           aboutme.classList.add("hide")
           contactme.classList.remove("show")
       }
       if(event.target.classList.contains("coveabo"))
       {
           aboutme.classList.remove("hide")
           
           main.classList.remove("show")
           contactme.classList.remove("show")

       }
       if(event.target.classList.contains("covecont"))
       {
           console.log("hey")
           main.classList.remove("show")
           
           aboutme.classList.add("hide")
           contactme.classList.add("show")
           console.log(contactme)

       }
   })
})
