"use strict";
const body = document.body;
const slides = document.querySelectorAll(".bg-container");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
console.log(slides);

let activeSlide = 0;
console.log(activeSlide);
rightBtn.addEventListener("click", function () {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  } else {
    changeBgImage();
    setActiveClass();
  }
});
leftBtn.addEventListener("click", function () {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  } else {
    changeBgImage();
    setActiveClass();
  }
});
changeBgImage();
function changeBgImage() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveClass() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[activeSlide].classList.add("active");
  });
}

var str = "Hello";
console.log(str.match("jello"));
