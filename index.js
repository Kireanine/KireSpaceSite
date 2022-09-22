//javascript time
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
//when someone clicks the burger menu
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    console.log(visibility);
})
//if menu is closed, open it
//if menu is open, close it

