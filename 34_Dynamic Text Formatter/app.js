// ELEMENTS
const input = document.querySelector("input");
const output = document.querySelector("#result");
const buttons = document.querySelectorAll(".box");
const toggleBtn = document.getElementById("theme-toggle");

// RESET OUTPUT STYLE BEFORE APPLYING ANY EFFECT
function resetOutputStyle() {
  output.style.fontStyle = "normal";
  output.style.fontWeight = "normal";
}

// TEXT FORMATTER
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return alert("Please enter a value");

    resetOutputStyle();

    switch (item.id) {
      case "uppercase":
        output.textContent = value.toUpperCase();
        break;

      case "lowercase":
        output.textContent = value.toLowerCase();
        break;

      case "italic":
        output.textContent = value;
        output.style.fontStyle = "italic";
        break;

      case "bold":
        output.textContent = value;
        output.style.fontWeight = "900";
        break;

      case "capitalize":
        output.textContent = value[0].toUpperCase() + value.slice(1);
        break;

      default:
        output.textContent = value;
    }
  });
});

// LIVE PREVIEW WHILE TYPING
input.addEventListener("input", () => {
  output.textContent = input.value;
  resetOutputStyle();
});

// ENTER KEY = APPLY CAPITALIZE BY DEFAULT
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = input.value.trim();
    if (text) {
      output.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
});

// THEME TOGGLE
toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");
  toggleBtn.innerText = isLight ? "Dark Mode" : "Light Mode";
});

// COPY BUTTON (Auto-add)
const copyBtn = document.createElement("button");
copyBtn.innerText = "Copy";
copyBtn.style.marginLeft = "15px";
copyBtn.style.padding = "8px 15px";
copyBtn.style.borderRadius = "10px";
copyBtn.style.border = "none";
copyBtn.style.cursor = "pointer";
copyBtn.style.fontWeight = "600";
copyBtn.style.background = "rgba(255,255,255,0.2)";
copyBtn.style.color = "white";
copyBtn.style.backdropFilter = "blur(5px)";
copyBtn.style.transition = "0.2s";

document.querySelector("#output").appendChild(copyBtn);

// COPY TO CLIPBOARD FUNCTIONALITY
copyBtn.addEventListener("click", () => {
  const text = output.textContent.trim();

  if (!text) return alert("Nothing to copy");

  navigator.clipboard.writeText(text);
  copyBtn.innerText = "Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy"), 1000);
});
