const buttonSlideMenu = document.querySelector("#button-slide-menu");
const buttonCloseSlideMenu = document.querySelector("#button-close-slide-menu");
const slideMenu = document.querySelector(".navbar-slide-menu");

buttonSlideMenu.addEventListener("click", () => {
    slideMenu.classList.add("active");
})

buttonCloseSlideMenu.addEventListener("click", () => {
    slideMenu.classList.remove("active");
})