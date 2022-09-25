const hamburgers = document.querySelectorAll(".open-and-close");
const openMenu = document.querySelector(".fa-ellipsis");
const closeMenu = document.querySelector(".fa-xmark");
const menuList = document.querySelector(".menu-page");
const body = document.querySelector(".main-container");
const angles = document.querySelectorAll(".angle");
const anglesUp = document.querySelectorAll(".fa-angle-up");
const anglesDown = document.querySelectorAll(".fa-angle-down");

hamburgers.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    body.classList.toggle("none");
    openMenu.classList.toggle("none");
    menuList.classList.toggle("show");
    closeMenu.classList.toggle("show");
  });
});

anglesUp.forEach((angleUp) => {
  angleUp.addEventListener("click", () => {
    const collapsible =
      angleUp.parentElement.parentElement.parentElement.nextElementSibling;
    const border =
      angleUp.parentElement.parentElement.parentElement.parentElement;

    border.classList.add("border");

    collapsible.classList.add("none");

    angleUp.classList.add("none");

    angleUp.nextElementSibling.classList.add("show");
  });
});
anglesDown.forEach((angleDown) => {
  angleDown.addEventListener("click", () => {
    const collapsible =
      angleDown.parentElement.parentElement.parentElement.nextElementSibling;
    const border =
      angleDown.parentElement.parentElement.parentElement.parentElement;
    border.classList.remove("border");

    collapsible.classList.remove("none");

    angleDown.classList.remove("show");
    angleDown.previousElementSibling.classList.remove("none");
  });
});
