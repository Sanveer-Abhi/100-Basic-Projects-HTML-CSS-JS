let result = document.querySelector("#result");
let btn = document.querySelector("#btn");
let input = document.querySelector("input");

btn.addEventListener("click", binaryConvert);

function binaryConvert() {
  let decimal = input.value;
  let tempDecimal;
  let rem = 0;
  let binary = 0;
  let place = 1;

  tempDecimal = decimal;

  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }
  result.innerHTML = `${binary}`;
}
