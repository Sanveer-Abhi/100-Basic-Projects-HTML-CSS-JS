let month = document.querySelector("#month");
let day = document.querySelector("#weekDay");
let date = document.querySelector("#date");
let year = document.querySelector("#year");

let D = new Date();


month.innerHTML = D.toLocaleDateString("en", {
  month: "long",
});

day.innerHTML = D.toLocaleDateString("en", {
  weekday: "long",
});

date.innerHTML = D.getDate();
year.innerHTML = D.getFullYear();
