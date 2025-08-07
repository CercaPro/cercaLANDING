"use strict";

var btnOpenMenuMob = document.getElementById("btnOpenMenuMob");
var btnCloseMenuMob = document.getElementById("btnCloseMenuMob");
var menu = document.getElementById("menuMob");
var body = document.body;

var toggleMenu = function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "grid"; // body.style.overflow = "hidden";
  } else {
    menu.style.display = "none"; // body.style.overflow = "auto";
  }
};

btnOpenMenuMob.addEventListener("click", toggleMenu);
btnCloseMenuMob.addEventListener("click", toggleMenu);
var btn1 = document.getElementById("btnMenuMob1");
var btn2 = document.getElementById("btnMenuMob2");
var btn3 = document.getElementById("btnMenuMob3");
var btn4 = document.getElementById("btnMenuMob4");
var btn5 = document.getElementById("btnMenuMob5");
var btn6 = document.getElementById("btnMenuMob6");

var closeMenu = function closeMenu() {
  menu.style.display = "none";
};

btn1.addEventListener("click", closeMenu);
btn2.addEventListener("click", closeMenu);
btn3.addEventListener("click", closeMenu);
btn4.addEventListener("click", closeMenu);
btn5.addEventListener("click", closeMenu);
btn6.addEventListener("click", closeMenu);