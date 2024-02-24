// mobile responsive nav
var closeMenu = document.getElementById("close-menu");
var openMenu = document.getElementById("open-menu");
var navMenu = document.getElementById("nav-menu");
var menuOverlay = document.getElementById("menu-overlay");
var servicesMenu = document.getElementById("disclosure-1");

closeMenu.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("hidden");
})

openMenu.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("hidden")
})

menuOverlay.addEventListener('click', () => {
    navMenu.classList.remove("active");
    menuOverlay.classList.toggle("hidden");
})

function hideOverlay() {
    menuOverlay.classList.toggle("hidden");
}










//book a services
var bookBtns = document.querySelectorAll(".book-btn");

bookBtns.forEach((bookBtn) => {
    bookBtn.addEventListener('click', popForm);
})


// form pop up
var form = document.querySelector(".form-container");
var formOverlay = document.getElementById("form-overlay")

document.querySelector("#close-form").addEventListener('click', ()=>{
    form.classList.remove("active");
    formOverlay.classList.add("hidden");
})

formOverlay.addEventListener('click', ()=>{
    form.classList.remove("active");
    formOverlay.classList.add("hidden");
})

function popForm() {
    form.classList.toggle("active");
    if (form.classList.contains("active")) {
        formOverlay.classList.remove("hidden");
    } else {
        formOverlay.classList.add("hidden");
    };
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
    }
}
