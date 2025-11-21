let play = document.querySelector("#playIcon");
let vedio = document.querySelector("video");
let trailorBox = document.querySelector(".trailor-box");
let shut = document.querySelector("#cross");

play.addEventListener("click", function () {
  trailorBox.classList.add("active");
  vedio.play();
});

shut.addEventListener("click", function () {
  trailorBox.classList.remove("active");
  vedio.pause();
  // vedio.currentTime = 0
});
