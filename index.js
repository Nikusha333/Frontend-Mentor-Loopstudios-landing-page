const iconHamburger = document.querySelector(".icon-hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");

function toggle(id) {
  let iconHamburger = document.getElementById(id);
  if (mobileMenu.style.display == "block") {
    iconHamburger.style.display = "none";
  } else iconHamburger.style.display = "block";
}

iconHamburger.addEventListener("click", function () {
  toggle("mobile-menu");
});

close.addEventListener("click", (event) => {
  toggle("mobile-menu");
});
