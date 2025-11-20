const container = document.getElementById("container");
const progressBar = document.getElementById("progressBar");

container.addEventListener("scroll", () => {
  const Scrolled = container.scrollTop;
  const totalScrollHeight = container.scrollHeight;
  const VisibleArea = container.clientHeight;

  const scrollPercentage = (Scrolled / (totalScrollHeight - VisibleArea)) * 100;

  progressBar.style.width = scrollPercentage + "%";
});
