const boxes = document.querySelectorAll(".boxes");
const preview = document.querySelector(".preview");
const closeBtn = document.querySelector("#btn");
const showBox = document.querySelector("#show-box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const imgName = box.dataset.img;

    // Reset animation so zoomPop plays every time
    showBox.style.animation = "none";

    showBox.style.animation = "";

    showBox.style.backgroundImage = `url(assets/${imgName}.png)`;
    preview.classList.add("active");
  });
});

/* Click X button */
closeBtn.addEventListener("click", () => {
  preview.classList.remove("active");
});

/* Click background to close */
preview.addEventListener("click", (e) => {
  if (e.target === preview) {
    preview.classList.remove("active");
  }
});
