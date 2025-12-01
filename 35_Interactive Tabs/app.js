let items = document.querySelectorAll(".items");
let sections = document.querySelectorAll("section");

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout); // Agar pehle ka timer chal raha tha, cancel kar DIYA
    timeout = setTimeout(func, delay); // Naya timer set KIYA
  };
}

// Function to handle section activation

// Attach debounced click
items.forEach((item) => {
  item.addEventListener(
    "click",
    debounce(() => {
      sections.forEach((elem) => {
        elem.classList.remove("active");
        if (elem.classList.contains(item.id)) {
          elem.classList.add("active");
        }
      });
    }, 200)
  );
});
