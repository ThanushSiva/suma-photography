const hamburger = document.querySelector(".ham");
const hmenu = document.querySelector(".hidemenu");
const close = document.querySelector(".close");
const bdover = document.querySelector("body");

hamburger.addEventListener('click', e =>{
    hmenu.classList.add("show");
    bdover.style.overflow="hidden";
});
close.addEventListener('click', e =>{
    hmenu.classList.remove("show");
    bdover.style.overflow="";
})