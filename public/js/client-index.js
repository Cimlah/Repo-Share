const body = document.body
const themeSwitcher = document.querySelectorAll(".theme-switcher")
const menuIcon = document.querySelectorAll(".menu-icon")
const menuIconMobile = document.querySelector(".menu-icon-mobile")
const navMobileMenu = document.querySelector(".nav-mobile-menu")

function removeAnimation() {
    themeSwitcher.forEach(index => {index.classList.remove("switcher-animation")});
}

function switchTheme() {
    themeSwitcher.forEach(index => {index.classList.add("switcher-animation")});

    if(body.classList.contains("dark")) {
        body.classList.replace("dark", "light");
        themeSwitcher.forEach(index => {index.src="images/sun.png"});
        menuIcon.forEach(index => {index.src="images/menu-icon-black.png"});
        console.log("Theme switched to light");
    }
    else {
        body.classList.replace("light", "dark");
        themeSwitcher.forEach(index => {index.src="images/moon.png"});
        menuIcon.forEach(index => {index.src="images/menu-icon.png"});
        console.log("Theme switched to dark");
    }

    setTimeout(removeAnimation, 2000);
}

function showHideMenu() {
    if(navMobileMenu.style.display == "none") {
        navMobileMenu.style.display = "flex";
        body.style.overflow = "hidden";
    }
    else {
        navMobileMenu.style.display = "none";
        body.style.overflow = null;
    }
}

themeSwitcher.forEach(index => {index.addEventListener("click", switchTheme)});
menuIconMobile.addEventListener("click", showHideMenu);