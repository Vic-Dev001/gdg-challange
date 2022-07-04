
var scroller = document.getElementById("scrolltopicon");

window.onscroll = function () {
  scrollbtn();
};

function scrollbtn() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scroller.style.display = "block";
  } else {
    scroller.style.display = "none";
  }
}

function scrolltotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}