const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

if (menu) {
  menu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });
}

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
