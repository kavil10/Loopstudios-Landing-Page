const burger = document.querySelector(".header__nav__menu");
const burgerFirst = document.querySelector(".menu--line:first-child");
const burgerSecond = document.querySelector(".menu--line:nth-child(2)");
const burgerThird = document.querySelector(".menu--line:last-child");
const nav = document.querySelector(".header__nav__links");

burger.addEventListener("click", function (e) {
  burgerFirst.classList.toggle("line-1");
  burgerSecond.classList.toggle("line-2");
  burgerThird.classList.toggle("line-3");
  nav.classList.toggle("open");
});
