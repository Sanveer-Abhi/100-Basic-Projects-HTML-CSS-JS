let red = document.querySelector("#red");
let container = document.querySelector("#container");

function change() {
  red.classList.toggle("animationaa");
}

container.addEventListener("click", change);
red.addEventListener("animationend", () => {
    red.classList.remove("animationaa");
});