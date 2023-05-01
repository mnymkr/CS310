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