let close = document.querySelectorAll("#icon-box img");
let box = document.querySelector("#icon-box");
let page_container = document.querySelector("#page-container");

box.addEventListener("click", function () {
  close.forEach((element) => {
    element.classList.toggle("active");
  });
  page_container.classList.toggle("move");
});

let nav_item = document.querySelectorAll(".nav-items");
let pages = document.querySelectorAll(".sec");
let page_index = 0;
let overlay = document.querySelector("#overlay");

nav_item.forEach((item, i) => {
  item.addEventListener("click", function () {
    overlay.style.animation = `change 0.8s linear  1`;

    setTimeout(() => {
      pages[page_index].classList.remove("show");
      pages[i].classList.add("show");
      page_index = i;
    }, 500);

    setTimeout(() => {
      overlay.style.animation = null;
    }, 1000);
  });
});

pages.forEach((item) => {
  item.addEventListener("click", function () {
    page_container.classList.toggle("move");
    close.forEach((element) => {
      element.classList.toggle("active");
    });
  });
});
