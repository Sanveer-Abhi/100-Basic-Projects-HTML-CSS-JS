let icon = document.querySelector("#icon");
let container1 = document.querySelector("#container1");
let container2 = document.querySelector("#container2");
let options = document.querySelectorAll(".options");
let text = document.querySelector("#text");
console.log(options);

container1.addEventListener("click", function () {
  container2.classList.toggle("hide");
  icon.classList.toggle("rotate");
});

options.forEach((item) => {
  item.addEventListener("click", function () {
    text.textContent = item.textContent;
  });
});
