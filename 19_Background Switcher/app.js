let toggler = document.querySelector("#switch");

toggler.addEventListener("click", function () {
  if (toggler.checked === true) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
