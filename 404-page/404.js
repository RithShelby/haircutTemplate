const btnToTop = document.querySelector(".back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "flex";
  } else {
    btnToTop.style.display = "none";
  }
}

btnToTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
