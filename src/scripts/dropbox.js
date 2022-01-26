const shop_dropbox = document.querySelector('.shop-dropdown')
const dropbox = document.querySelector("#dropbox-shop-mb")

let dropOpen = false

shop_dropbox.addEventListener("click", ()=>{
  console.log(dropOpen)
  if(!dropOpen){

    shop_dropbox.classList.add('open')
    dropbox.style.display = 'flex'
    dropOpen = true
  }else{

  
    shop_dropbox.classList.remove('open')

    dropbox.style.display = 'none'
    dropOpen=false

  }
})