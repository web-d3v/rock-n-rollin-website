const openNavButton = document.querySelector("#mobileNavOpen");
const closeNavButton = document.querySelector("#mobileNavClose");

const nav = document.querySelector("nav");
nav.style.transition = "height ease 0.55s";
const header = document.querySelector("header");

openNavButton.addEventListener("click", (e) => {
    header.style.borderBottom = "2px solid white";
    nav.style.height = "100vh";
    openNavButton.classList.add("active");
})

closeNavButton.addEventListener("click", (e) => {
    openNavButton.classList.remove("active");
    header.style.borderBottom = "none";
    nav.style.height = "0";
})

const toPX = (rem) => { return (rem * 16) }
const toRem = (px) => { return (px / 16) }

window.addEventListener("resize", () => {
    const width = window.screen.availWidth;
    if (width > toPX(67.5)) {
        // put navbar back to desktop view
        console.log("TRUE!!!")

        nav.style.height = "3rem";
        if (openNavButton.classList.contains("active")) {
            openNavButton.classList.remove("active")
        }
    } else {
        // put navbar to mobile view
        console.log("FALSEE!!!!")
        nav.style.height = "0";
        header.style.borderBottom = "none";
        if (openNavButton.classList.contains("active")) {
            openNavButton.classList.remove("active")
        }
    }
})