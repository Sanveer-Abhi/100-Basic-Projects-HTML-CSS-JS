let operations = document.querySelector("#operations");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let result = document.querySelector('.result');

operations.addEventListener("click", function (e) {
  let ident = e.target.id;
  if (!ident) return;

  let value1 = Number(box1.value);
  let value2 = Number(box2.value);

  result.classList.add("active");

  if (isNaN(value1) || isNaN(value2)) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  if (ident === "divide" && value2 === 0) {
    result.textContent = "Cannot divide by zero";
    return;
  }

  let answer;

  switch (ident) {
    case "add":
      answer = value1 + value2;
      break;
    case "subtract":
      answer = value1 - value2;
      break;
    case "multiply":
      answer = value1 * value2;
      break;
    case "divide":
      answer = value1 / value2;
      break;
    default:
      return;
  }

  result.textContent = `Result of ${ident}: ${answer}`;
});
