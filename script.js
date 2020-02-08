let element = document.querySelector(".nav");

function activeBurger() {
    element.classList.toggle("burger--active");
}

element.addEventListener("click", activeBurger);

top_btn.onclick = function() {
    window.scrollTo(pageXOffset, 0);
  };

  window.addEventListener('scroll', function() {
    top_btn.hidden = (pageYOffset < 3000);
  });