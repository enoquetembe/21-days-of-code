const burger = document.querySelector(".toggler");
const nav = document.querySelector(".nav");
const daigonalOne = document.querySelector(".line-1")
const horzontanlLine = document.querySelector(".line-2")
const daigonalTwo =document.querySelector(".line-3")


burger.addEventListener("click", function() {
    toggleNav();
  });

function toggleNav() {
  nav.classList.toggle("nav-active");
  horzontanlLine.classList.toggle("horizontal-line")
  daigonalOne.classList.toggle("diagonal-line-1");
  daigonalTwo.classList.toggle("diagonal-line-2")
  
}
