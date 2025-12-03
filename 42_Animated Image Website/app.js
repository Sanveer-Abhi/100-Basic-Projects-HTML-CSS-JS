let btns = document.querySelectorAll(".btns");
let container2 = document.querySelector(".container2");
console.log(container2);

btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    removeActive();
    btn.classList.add("active");
    container2.style.background = `url(assets/${index}.png) no-repeat center/cover`;
  });
});

function removeActive() {
  btns.forEach((btn) => {
    container2.classList.add("zoom");
    setTimeout(() => {
      container2.classList.remove("zoom");
    }, 1000);
    btn.classList.remove("active");
  });
}

document.querySelector("#clicker").addEventListener("click", function () {
  btns[Math.floor(Math.random() * 3)].click();
});
