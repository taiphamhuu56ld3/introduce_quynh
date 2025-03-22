// Scroll to top effect
const backToBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToBtn.classList.add("active");
  } else {
    backToBtn.classList.remove("active");
  }
});
