let clicker = document.querySelector(".description");
let page = document.querySelector("#page1");
let icon = document.querySelector(".icon");

window.addEventListener("scroll", function (e) {
  let pos = this.window.scrollY;
  // console.log(pos);
  if (pos > 105) {
    icon.classList.add("active");
    clicker.classList.add("active");
  } else {
    icon.classList.remove("active");
    clicker.classList.remove("active");
  }
});
