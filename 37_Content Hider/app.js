let content_container2 = document.querySelector(".content-container2");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  content_container2.classList.toggle("show");
  if (content_container2.classList.contains("show")) {
    btn.innerHTML = " Hide More";
  } else {
    btn.innerHTML = "Load More";
  }
});
