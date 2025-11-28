let icon = document.querySelector("#icon");
let box = document.querySelector("#box");
let switchh = document.querySelector("#switch");
let list = document.querySelectorAll("li");
let focus = document.querySelector("#focus");

icon.addEventListener("click", function () {
  if (switchh.innerHTML == "close") {
    box.style.clipPath = "circle(100% at 50% 50%)";
    switchh.innerHTML = "open";
  } else {
    box.style.clipPath = "";
    switchh.innerHTML = "close";
  }
});

list.forEach((li) => {
  li.addEventListener("mouseenter", function () {
    let w = li.offsetWidth;
    let h = li.offsetHeight - 3;
    let t = li.offsetTop;

    focus.style.cssText = `transform:translateY(${t}px); width:${w}px; height:${h}px`;
  });
  li.addEventListener("mouseleave", function () {
    focus.style.cssText = ``;
  });
});
