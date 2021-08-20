const menuBtn = document.querySelector(".menu-btn");
const burgerEl = document.querySelector(".menu-btn--burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const menuNavItem = document.querySelectorAll(".menu-nav--item");

menuBtn.addEventListener("click", toggleMenu);
let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    burgerEl.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    menuNavItem.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    burgerEl.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    menuNavItem.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
