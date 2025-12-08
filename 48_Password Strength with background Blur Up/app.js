let background_image = document.querySelector("#background-image");
let password_field = document.querySelector("#password-box");

password_field.addEventListener("input", function (e) {
  let input = e.target.value;
  let blurfilter = 20 - input.length*2;
  background_image.style.filter = `blur(${blurfilter}px)`
});
