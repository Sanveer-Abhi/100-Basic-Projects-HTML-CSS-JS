let btn = document.querySelector("#signin");
let container = document.querySelector("#container");

btn.addEventListener("click", function () {
  document.querySelector("#details").classList.add("active");
  document.querySelector("#heading").classList.add("active");
  btn.classList.add("active");
  container.classList.add("show");
  document.querySelector(".giant-heading").classList.add("active2");
  document.querySelector(".close-icon").classList.add("active3");
  submit.innerHTML = "Create account!!";
  document.querySelector(".giant-heading").innerHTML = "Sign In now";
});

let close = document.querySelector(".close-icon");

close.addEventListener("click", function () {
  document.querySelector("#details").classList.remove("active");
  document.querySelector("#heading").classList.remove("active");
  btn.classList.remove("active");
  container.classList.remove("show");
  document.querySelector(".giant-heading").classList.remove("active2");
  document.querySelector(".close-icon").classList.remove("active3");
});

let submit = document.querySelector("#account-box");

submit.addEventListener("click", function () {
  setTimeout(() => {
    close.click();
  }, 2000);
  // alert("Account Creation Succsessfull")
  submit.innerHTML = " Account Created✅";
  document.querySelector(".giant-heading").innerHTML = "lets Go";
});
