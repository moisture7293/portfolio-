document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeBtn = document.getElementById("theme-toggle");
  const icon = themeBtn.querySelector("i");

  // 1. Dark Mode Toggle
  themeBtn.onclick = () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    icon.className = "fas fa-sun";
  }

  // 2. Smooth Scroll (Native behavior works for most, but this adds the header offset)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.onclick = (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    };
  });

  // 3. Simple Form Handling
  const form = document.querySelector(".contact-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  };
});
