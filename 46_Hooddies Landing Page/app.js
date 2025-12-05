function slider() {
  let close_icon = document.querySelector("#slider-close-button");
  let slider = document.querySelector("#slider");
  let menu = document.querySelector("#navbar-menu");
  menu.addEventListener("click", function () {
    slider.classList.add("slide");
  });
  close_icon.addEventListener("click", function () {
    slider.classList.remove("slide");
  });
}
slider();
