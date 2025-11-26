let icon = document.querySelector("#icon");
let input = document.querySelector("input");
icon.addEventListener("click", function () {
  if (input.type == "password") {
    input.type = "text";
    icon.style.backgroundColor = "red";
  } else {
    input.type = "password";
    icon.style.backgroundColor = "white";
  }
});
