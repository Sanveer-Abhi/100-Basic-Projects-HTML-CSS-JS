let toggler = document.querySelector("#toggeler");
let nav = document.querySelector("#nav");

toggler.addEventListener("click", () => {
    nav.classList.toggle('active')
});