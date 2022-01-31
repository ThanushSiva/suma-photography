const hamburger = document.querySelector(".ham");
const hmenu = document.querySelector(".hidemenu");
const close = document.querySelector(".close");
hamburger.addEventListener('click', e =>{
    hmenu.classList.add("show");
});
close.addEventListener('click', e =>{
    hmenu.classList.remove("show");
})