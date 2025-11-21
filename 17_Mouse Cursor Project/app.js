let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (event) => {
  x = event.clientX;
  y = event.clientY;
  setter(x, y);
});

function setter(postionX, postionY) {
  cursor.style.left = postionX + "px";
  cursor.style.top = postionY + "px";
}
