// IMAGE SLIDER
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// NAV MENU FOR MOBILE
let isOpenNavMenu = 0;

function openNavMenu() {
    let navMenuContainer = document.querySelector(".nav_menu_container");
    if (isOpenNavMenu == 0) { // menu is currently closed
        navMenuContainer.style.display = 'flex';
        isOpenNavMenu = 1;
    } else { // menu is currently open
        navMenuContainer.style.display = 'none'
        isOpenNavMenu = 0;
    }    
}