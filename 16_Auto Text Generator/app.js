let textHolder = document.querySelector("#text-content");

let words = ["Abhi", "God", "Demon", "Mage"];

let charIndex = 0;
let index = 0;

function type() {
  if (charIndex < words[index].length) {
    textHolder.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    textHolder.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 500);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    } else {
      type();
    }
  }
}

document.addEventListener("DOMContentLoaded", type);
