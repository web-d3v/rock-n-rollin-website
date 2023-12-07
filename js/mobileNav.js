const toggleButton = document.querySelector("#mobileNavToggle");
const showElement = (element, transition, height) => {
    element.classList.toggle("show")
    if (transition) {

    }
} 
toggleButton.addEventListener("click", (e) => {
    const nav = document.querySelector("nav");
    const navItems = nav.querySelector("section");
    const dropDowns = navItems.querySelectorAll(".dropDown");
    for (var i = 0; i < dropDowns.length; i++) {
        const dropDown = dropDowns[i];
        const dropDownContent = dropDown.querySelector(".dropDownContent");
        showElement(dropDown);
    }
    showElement(navItems)
    showElement(nav,true, navItems.offsetHeight)

})