const navscroll = document.querySelector(".navcontainer");

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navscroll.setAttribute("style","background-color: rgb(34, 34, 34);")
    } else {
        navscroll.removeAttribute("style","background-color: rgb(34, 34, 34);")
    }
}