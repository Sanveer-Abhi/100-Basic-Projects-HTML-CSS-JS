let button = document.querySelector("#btn");
let box = document.querySelector("#box");

let emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😚",
  "😙",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😌",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙁",
  "😬",
  "🤥",
];

button.addEventListener("click", function () {
  box.innerHTML = emojis[Math.floor(Math.random() * 40)];
});
