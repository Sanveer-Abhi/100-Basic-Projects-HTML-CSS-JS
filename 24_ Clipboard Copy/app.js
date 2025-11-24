let copy = document.querySelector("#copy");
let move = document.querySelector("#move");
let copybtn = document.querySelector("#copy-btn");
let movebtn = document.querySelector("#move-btn");

copybtn.addEventListener("click", function () {
  if (copy.value == "") {
    console.log("please enter a value to copy");
  } else {
    copy.select(); // select the text
    copy.setSelectionRange(0, 99999); // for mobile support
    document.execCommand("copy"); // copy
    alert(" Copied To ClipBoard");
  }
});

movebtn.addEventListener("click", function () {
  if (copy.value == "") {
    console.log("enter the value");
  } else {
    move.value = copy.value;
  }
});
