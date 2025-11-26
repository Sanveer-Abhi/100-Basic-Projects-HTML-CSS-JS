let load = document.querySelector(".loading");
let background = document.querySelector(".background");
let loadper = 0;
let int = setInterval(bluring, 30);

function bluring() {
  loadper++;

  if (loadper > 99) {
    clearInterval(int);
    alert('Page loaded')
    background.style.backgroundImage = "url(assets/free-nature-images.jpg)";
  }

  load.innerText = `${loadper}%`;
  load.style.opacity = scale(loadper, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadper, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
