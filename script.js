// window.onscroll = function() {myFunction()};

// var header = document.getElementsByClassName("nav-con");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


const mainMenu = document.querySelector(".main-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click",open);
closeMenu.addEventListener("click",close);

function open(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    
}
function close(){
    
    mainMenu.style.top = "-100%";
    
}

