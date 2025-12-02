let keybox = document.querySelector(".key");
let keyCodebox = document.querySelector(".key-code");
let keyEventbox = document.querySelector(".key-event");

window.addEventListener("keydown", function (e) {
  if (e.code != "Space") {
    keybox.innerHTML = e.key;
  } else {
    keybox.innerHTML = "Space";
  }
  keyCodebox.innerHTML = e.keyCode;
  keyEventbox.innerHTML = e.code;
});
