let count = document.querySelector("#count");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let save = document.querySelector("#save");
let clear = document.querySelector("#clear");

let saveList = document.querySelector("#saved-data");

let starter = 0;

increase.addEventListener("click", function () {
  starter += 1;
  count.innerHTML = starter;
});
decrease.addEventListener("click", function () {
  if (starter > 0) {
    starter -= 1;
    count.innerHTML = starter;
  }
});

save.addEventListener("click", function () {
  saveList.innerHTML += starter + ",";
});
clear.addEventListener("click", function () {
  saveList.innerHTML = "";
});
