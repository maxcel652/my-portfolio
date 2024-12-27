// use the dom to display the nav menu on mobile screens
const hamburger = document.getElementById("hamburger")
const menuBtn = document.getElementById("menu")

// make the hamburger clickable
hamburger.addEventListener("click", ()=>{
    menuBtn.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})