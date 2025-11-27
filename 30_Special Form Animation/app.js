let labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map((words, index) => {
      return `<span style= "transition-delay:${
        index * 100
      }ms">${words}</span> `;
    })
    .join("");
});
