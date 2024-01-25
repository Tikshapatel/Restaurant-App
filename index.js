let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".bars");
let nav_open = document.querySelector(".nav-open");
let nav_li = document.querySelector(".nav-li");

var click = true;
function nav_click() {
  if (click == true) {
    click = false;
    nav_open.style.height = 0;
    nav_open.style.opacity = 0;
    nav_open.style.transition = "1s ease-in-out";
  } else {
    click = true;
    nav_open.style.height = "12em";
    nav_open.style.opacity = 1;
    nav_open.style.transition = "1s ease-in-out";
  }
  console.log(`abhishek  :  ${click}`);
}


window.onclick = function (event) {
  if (event.target == nav_open) {
    click = false;
    nav_open.style.height = 0;
    nav_open.style.opacity = 0;

    console.log("click outside");
  }
};