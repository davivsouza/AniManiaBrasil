const menuBtn = document.querySelector(".menu-btn")
const menuMb = document.querySelector("#menu-mb")
let menuOpen = false

menuBtn.addEventListener("click", ()=>{
  if(!menuOpen){
    menuBtn.classList.add('open')
    menuMb.style.display = "flex"
    menuOpen= true
  }else{
    menuBtn.classList.remove('open')
    menuMb.style.display = "none"

    menuOpen=false
  }
})