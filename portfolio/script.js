const btn = document.getElementById("theme-toggle");
const icon = btn.querySelector("i");

// Toggle Dark Mode
btn.onclick = () => {
  document.body.classList.toggle("dark");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
};

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.onclick = (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };
});
