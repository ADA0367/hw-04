document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".main-nav");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
