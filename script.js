let nav = document.querySelector(".js-nav");
let menu = document.querySelector('.js-menu-toggler')

function activeBurger() {
  nav.classList.toggle("burger--active");
}

menu.addEventListener("click", activeBurger);

top_btn.onclick = function () {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function () {
  top_btn.hidden = (pageYOffset < 3000);
});