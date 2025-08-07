const btnOpenMenuMob = document.getElementById("btnOpenMenuMob");
const btnCloseMenuMob = document.getElementById("btnCloseMenuMob");
const menu = document.getElementById("menuMob");
const body = document.body;

const toggleMenu = () => {
    if (menu.style.display === "none") {
        menu.style.display = "grid";
        // body.style.overflow = "hidden";
    } else {
        menu.style.display = "none";
        // body.style.overflow = "auto";
    }
}

btnOpenMenuMob.addEventListener("click", toggleMenu)
btnCloseMenuMob.addEventListener("click", toggleMenu)

const btn1 = document.getElementById("btnMenuMob1");
const btn2 = document.getElementById("btnMenuMob2");
const btn3 = document.getElementById("btnMenuMob3");
const btn4 = document.getElementById("btnMenuMob4");
const btn5 = document.getElementById("btnMenuMob5");
const btn6 = document.getElementById("btnMenuMob6");

const closeMenu = () => {
    menu.style.display = "none";
}

btn1.addEventListener("click", closeMenu)
btn2.addEventListener("click", closeMenu)
btn3.addEventListener("click", closeMenu)
btn4.addEventListener("click", closeMenu)
btn5.addEventListener("click", closeMenu)
btn6.addEventListener("click", closeMenu)